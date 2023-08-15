import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { take } from "rxjs";
import { Artist } from "../../interfaces/artist.interface";
import { PopularTracks } from "../../interfaces/popular-tracks.interface";
import { SpotifyService } from "../../services/spotify.service";
@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})

export class CoverComponent  implements OnInit {
  ledZeppelinId: string = "36QJpDe2go2KgaRleHCDTp";
  mainArtist!: Artist;
  selectedTrack: string = "";
  constructor(
    private spotifyService: SpotifyService,
    private sanitizer: DomSanitizer
  ) {}
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


