import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, CartComponent, MatToolbarModule, MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
