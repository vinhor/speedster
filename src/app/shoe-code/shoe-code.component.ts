import { Component } from '@angular/core';

@Component({
  selector: 'app-shoe-code',
  imports: [],
  templateUrl: './shoe-code.component.html',
  styleUrl: './shoe-code.component.css',
})
export class ShoeCodeComponent {
  handleClick() {
    alert(
      'Toto je pouze fiktivní firma, a systém přihlašování není a nebude implementován.'
    );
  }
}
