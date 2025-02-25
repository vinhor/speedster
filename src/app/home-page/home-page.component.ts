import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  router = inject(Router);
  shoeCodeForm = new FormGroup({
    shoeCode: new FormControl('', [Validators.required]),
  });
  handleSubmit() {
    if (!this.shoeCodeForm.valid) return;
    if (this.shoeCodeForm.value.shoeCode === 'abcd123') {
      this.router.navigateByUrl('/shoe-code-example');
    } else {
      alert(
        'Toto je pouze fiktivní firma a systém pro kódy proto není a nebude implementován.'
      );
    }
  }
}
