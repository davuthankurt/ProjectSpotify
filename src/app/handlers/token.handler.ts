import { Injectable } from "@angular/core";
import { TokenService } from "../services/token.service";
import { interval } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TokenHandler {
  constructor(private tokenService: TokenService) {
    this.initToken();
  }

  initToken(): void {
    if (!localStorage.getItem("access_token")) {
      this.tokenService.getAccessToken().subscribe((res) => res);
    }
    interval(3600 * 1000).subscribe(() => {
      this.tokenService.getAccessToken().subscribe((res) => res);
    });
  }
}
