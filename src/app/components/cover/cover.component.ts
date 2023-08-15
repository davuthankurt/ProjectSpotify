import { Component, Input, OnInit } from "@angular/core";
import { Artist } from "../../interfaces/artist.interface";
@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.scss"],
})
export class CoverComponent implements OnInit {
  @Input()
  mainArtist!: Artist;
  @Input()
  apiSuccess: boolean = true;
  constructor() {}
  ngOnInit(): void {}
}
