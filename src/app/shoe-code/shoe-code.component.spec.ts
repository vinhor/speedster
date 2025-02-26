import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCodeComponent } from './shoe-code.component';

describe('ShoeCodeComponent', () => {
  let component: ShoeCodeComponent;
  let fixture: ComponentFixture<ShoeCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
