import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeproductsComponent } from './bikeproducts.component';

describe('BikeproductsComponent', () => {
  let component: BikeproductsComponent;
  let fixture: ComponentFixture<BikeproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
