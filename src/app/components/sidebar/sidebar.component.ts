import { Component, OnInit } from "@angular/core";
import { SidebarMenuItem } from "../../interfaces/sidebar-menu-item";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  menuItems: SidebarMenuItem[] = [
    {
      title: "Home",
      icon: "house-fill",
      route: "/home",
      active: false,
    },
    {
      title: "Trends",
      icon: "bookmark-star-fill",
      route: "/trends",
      active: false,
    },
    {
      title: "Library",
      icon: "music-note-beamed",
      route: "/library",
      active: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    if (window.location.pathname === "/") {
      this.changeRoute("/home");
    } else {
      this.changeRoute(window.location.pathname);
    }
  }

  changeRoute(clickedRoute: string) {
    this.menuItems.map((item) => (item.active = false));
    this.menuItems.filter((item) => item.route === clickedRoute)[0].active =
      true;
  }
}
