import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  api_url: string = "https://api.spotify.com/v1/";
  client_secret: string = "8817fb6f29b64ac0a5e05f50984e85f0";
  client_id: string = "1dc299d33b0149bc8c6c114139fbb192";
  access_token!: string;
  body = new URLSearchParams();
  constructor(private http: HttpClient) {
    this.body.set("grant_type", "client_credentials");
  }
  getAccessToken() {
    return this.http
      .post("https://accounts.spotify.com/api/token", this.body.toString(), {
        headers: {
          Authorization:
            "Basic " + btoa(this.client_id + ":" + this.client_secret),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .pipe(
        map((res: any) => {
          this.access_token = res.access_token;
          return res;
        })
      );
  }

  getArtist(id: string) {
    return this.http.get(`${this.api_url}artists/${id}`, {
      headers: {
        Authorization: `Bearer ${this.access_token}`,
      },
    });
  }

  getArtistTopTracks(id: string, market: string) {
    return this.http.get(
      `${this.api_url}artists/${id}/top-tracks?market=${market}`,
      {
        headers: {
          Authorization: `Bearer ${this.access_token}`,
        },
      }
    );
  }
}
