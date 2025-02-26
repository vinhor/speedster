import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LinkComponent } from './link/link.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Speedster';
}
