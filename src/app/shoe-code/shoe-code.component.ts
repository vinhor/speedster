import { Component } from '@angular/core';

@Component({
  selector: 'app-shoe-code',
  imports: [],
  templateUrl: './shoe-code.component.html',
  styleUrl: './shoe-code.component.css',
})
export class ShoeCodeComponent {
  handleClick(text: string) {
    alert(text);
  }
}
