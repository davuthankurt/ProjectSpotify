import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { take } from "rxjs";
import { Artist } from "../../interfaces/artist.interface";
import { PopularTracks } from "../../interfaces/popular-tracks.interface";
import { SpotifyService } from "../../services/spotify.service";
@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent  implements OnInit{
  ledZeppelinId: string = "36QJpDe2go2KgaRleHCDTp";
  mainArtistTopTracks!: PopularTracks;
  selectedTrack: string = "";
  constructor(
    private spotifyService: SpotifyService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.getMainArtistsTopTracks();
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
