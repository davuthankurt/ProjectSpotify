import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { TrendsComponent } from "./components/trends/trends.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { TokenHandler } from "./handlers/token.handler";
import { CoverComponent } from './components/cover/cover.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendsComponent,
    SidebarComponent,
    CoverComponent,
    TopTracksComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [TokenHandler],
      useFactory: initializer,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initializer() {
  return function () {};
}
