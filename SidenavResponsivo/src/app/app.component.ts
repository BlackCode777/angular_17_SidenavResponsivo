import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

// material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // Import CommonModule
    CommonModule,

    // Import Router
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,

    // Import Components
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    SidenavComponent,

    //Import Libs Material Angular
    MatSidenavModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,

    // Import NgbModule do bootstrap
    NgbModule,

    //BrowserAnimationsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SidenavResponsivo';

  sideBarOpen = true;

  ngOnInit() {
    console.log('AppComponent');
  }

  sideBarToggle() {
    console.log('AppComponent');
    this.sideBarOpen = !this.sideBarOpen;
  }
}
