import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule,
    //Import Libs Material Angular
    MatSidenavModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {}
