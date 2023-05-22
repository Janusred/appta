import { Component, OnInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@services';
import { SidebarModule } from 'primeng/sidebar';
import { NavbarComponent } from 'src/app/navbar/navbar.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    SidebarModule,
    NavbarComponent,
    RouterModule
  ]
})
export class MainComponent implements OnInit {
  sidebarVisible: boolean = false;
  constructor(private UserService: UserService, private router: Router) {

  }

  ngOnInit(): void {

  }
}
