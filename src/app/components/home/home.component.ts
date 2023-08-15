import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { take } from "rxjs";
import { Artist } from "../../interfaces/artist.interface";
import { PopularTracks } from "../../interfaces/popular-tracks.interface";
import { SpotifyService } from "../../services/spotify.service";
import { SearchedTracks } from "src/app/interfaces/searched-track.interface";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent  implements OnInit {
  ledZeppelinId: string = "36QJpDe2go2KgaRleHCDTp";
  mainArtist!: Artist;
  mainArtistTopTracks!: PopularTracks;
  
  isSearchActive : boolean;
  searchForm: any
  searchedTracks !: SearchedTracks;

  selectedTrack: string = "";
  constructor(
    private spotifyService: SpotifyService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.getMainArtist();
    this.getMainArtistsTopTracks();
    this.searchForm= new FormGroup({
      searchedSong: new FormControl('')
    });
    this.isSearchActive = true;
  }

  getMainArtist() {
    setTimeout(() => {
      this.spotifyService
        .getArtist(this.ledZeppelinId)
        .pipe(take(1))
        .subscribe((res: any) => {
          this.mainArtist = res;
          console.log(this.mainArtist);
        });
    }, 1);
  }

  getMainArtistsTopTracks() {
    setTimeout(() => {
      this.spotifyService
        .getArtistTopTracks(this.ledZeppelinId, "TR")
        .pipe(take(1))
        .subscribe((res: any) => {
          this.mainArtistTopTracks = res;
          console.log(this.mainArtistTopTracks);
        });
    }, 1);
  }


  getBarSearchedTracks() {
    setTimeout(() => {
      this.spotifyService
        .getSearchedTracks(this.searchForm.get('searchedSong').value, "TR")
        .pipe(take(1))
        .subscribe((res:any) => {
          this.searchedTracks = res;
          console.log(this.searchedTracks);
        });
    },1);
  }



  callForSearch(){

    console.log(this.searchForm.get('searchedSong').value);
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
}