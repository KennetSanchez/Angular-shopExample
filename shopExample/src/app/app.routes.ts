import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: 'shopping-cart',
        component: CartComponent
    },
    {
        path: '',
        component: MainComponent
    }
];
