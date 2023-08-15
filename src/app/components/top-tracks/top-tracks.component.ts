import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { take } from "rxjs";
import { PopularTracks } from "../../interfaces/popular-tracks.interface";
import { SpotifyService } from "../../services/spotify.service";
@Component({
  selector: "app-top-tracks",
  templateUrl: "./top-tracks.component.html",
  styleUrls: ["./top-tracks.component.scss"],
})
export class TopTracksComponent implements OnInit {
  @Input()
  mainArtistTopTracks!: PopularTracks;
  selectedTrack: string = "";
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {}

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
