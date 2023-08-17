import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { take } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import {
  Artist,
  SearchedTracks,
} from "src/app/interfaces/searched-track.interface";
import { SpotifyService } from "../../services/spotify.service";
import { PopularTracks } from "../../interfaces/popular-tracks.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isSearchActive: boolean;
  searchForm: FormGroup;
  searchedTracks!: SearchedTracks;
  selectedTrack: string = "";
  mainArtistId: string = "36QJpDe2go2KgaRleHCDTp";
  isAPISuccess: boolean = true;
  mainArtist!: Artist;
  mainArtistTopTracks!: PopularTracks;
  isLoading: boolean = true;
  constructor(
    private spotifyService: SpotifyService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchedSong: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
    this.isSearchActive = true;
    this.getMainArtist();
    this.getMainArtistsTopTracks();
  }

  getBarSearchedTracks() {
    this.spotifyService
      .getSearchedTracks(this.searchForm.get("searchedSong").value, "TR")
      .pipe(take(1))
      .subscribe((res: any) => {
        this.searchedTracks = res;
        console.log(this.searchedTracks);
      });
  }

  getMainArtist() {
    this.spotifyService
      .getArtist(this.mainArtistId)
      .pipe(take(1))
      .subscribe({
        next: (res: any) => {
          if (res) {
            this.mainArtist = res;
            this.isLoading = false;
          }
        },
        error: (error) => {
          if (error.status === 400) {
            this.isAPISuccess = false;
          }
        },
      });
  }

  getMainArtistsTopTracks() {
    this.spotifyService
      .getArtistTopTracks(this.mainArtistId, "TR")
      .pipe(take(1))
      .subscribe((res: any) => {
        this.mainArtistTopTracks = res;
        console.log(this.mainArtistTopTracks);
      });
  }

  callForSearch() {
    this.getBarSearchedTracks();
    this.isSearchActive = false;
  }

  selectTrack(id: string) {
    this.selectedTrack = id;
    this.iframeUrl();
  }

  iframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/track/${this.selectedTrack}?utm_source=generator&theme=0`
    );
  }

  onChange(event) {
    this.searchForm
      .get("searchedSong")
      .valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(() => {});
  }
  changeCover(id: string) {
    this.mainArtistId = id;
    this.getMainArtist();
    this.getMainArtistsTopTracks();
    this.isSearchActive = true;
  }
}
