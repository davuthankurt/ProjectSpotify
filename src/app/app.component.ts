import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "./services/spotify.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}
  ngOnInit(): void {
    // this.spotifyService.getAccessToken().subscribe((res) => res);
  }
  title = "angular-app";
}
