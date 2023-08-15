import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  api_url: string = "https://api.spotify.com/v1/";

  constructor(private http: HttpClient) {}

  getArtist(id: string) {
    return this.http.get(`${this.api_url}artists/${id}`);
  }

  getArtistTopTracks(id: string, market: string) {
    return this.http.get(
      `${this.api_url}artists/${id}/top-tracks?market=${market}`
    );
  }

  getSearchedTracks(search: string, market: string){
    return this.http.get(`${this.api_url}search?query=${search}&type=artist%2Ctrack&market=${market}&limit=10&offset=5`);
  }
}
