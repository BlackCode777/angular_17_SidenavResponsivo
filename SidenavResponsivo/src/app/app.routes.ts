import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

export const routes: Routes = [
  {
    // Rota inicial
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    // Rotas de produtos
    path: 'produtos',
    component: ProductsComponent,
  },

  {
    // Rota do Dashboard
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    // Rota de Statistics
    path: 'statistics',
    component: StatisticsComponent,
  },
];
