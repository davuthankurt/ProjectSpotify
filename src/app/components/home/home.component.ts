import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";
import { Artist } from "../../interfaces/artist.interface";
import { take } from "rxjs";
import { PopularTracks } from "../../interfaces/popular-tracks.interface";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  ledZeppelinId: string = "36QJpDe2go2KgaRleHCDTp";
  mainArtist!: Artist;
  mainArtistTopTracks!: PopularTracks;
  constructor(private spotifyService: SpotifyService) {}
  ngOnInit(): void {
    this.getMainArtist();
    this.getMainArtistsTopTracks();
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
}
