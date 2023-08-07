import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TrendsComponent } from './components/trends/trends.component';
import { UserLibraryComponent } from './components/user-library/user-library.component';
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from './components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendsComponent,
    UserLibraryComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
