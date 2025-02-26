import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoeCodeComponent } from './shoe-code/shoe-code.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Speedster',
  },
  {
    path: 'shoe-code-example',
    component: ShoeCodeComponent,
    title: 'Bota abcd123 | Speedster',
  },
];
