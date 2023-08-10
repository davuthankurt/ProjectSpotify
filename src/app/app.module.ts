import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { TrendsComponent } from "./components/trends/trends.component";
import { UserLibraryComponent } from "./components/user-library/user-library.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { TokenHandler } from "./handlers/token.handler";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendsComponent,
    UserLibraryComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
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
