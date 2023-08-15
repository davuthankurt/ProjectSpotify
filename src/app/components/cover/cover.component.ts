import { Component, OnInit } from "@angular/core";
import { take } from "rxjs";
import { Artist } from "../../interfaces/artist.interface";
import { SpotifyService } from "../../services/spotify.service";
@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.scss"],
})
export class CoverComponent implements OnInit {
  ledZeppelinId: string = "2rwALQ1SXdfUWPUd6WOfYS";
  mainArtist!: Artist;
  selectedTrack: string = "";
  constructor(private spotifyService: SpotifyService) {}
  ngOnInit(): void {
    this.getMainArtist();
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
}
