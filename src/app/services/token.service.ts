import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  token_api_url: string = "https://accounts.spotify.com/api/token";
  client_secret: string = "8817fb6f29b64ac0a5e05f50984e85f0";
  client_id: string = "1dc299d33b0149bc8c6c114139fbb192";
  body = new URLSearchParams();
  constructor(private http: HttpClient) {
    this.body.set("grant_type", "client_credentials");
  }

  getAccessToken() {
    return this.http
      .post(this.token_api_url, this.body.toString(), {
        headers: {
          Authorization:
            "Basic " + btoa(this.client_id + ":" + this.client_secret),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .pipe(
        map((res: any) => {
          localStorage.setItem("access_token", res.access_token);
          return res;
        })
      );
  }
}
