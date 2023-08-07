import { Component, Input } from '@angular/core';
import { SidebarMenuItem } from 'src/app/sidebar-menu-item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input()
  menuItem: SidebarMenuItem[] =[];


}
