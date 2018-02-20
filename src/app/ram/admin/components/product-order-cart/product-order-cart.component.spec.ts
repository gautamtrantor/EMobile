import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderCartComponent } from './product-order-cart.component';

describe('ProductOrderCartComponent', () => {
  let component: ProductOrderCartComponent;
  let fixture: ComponentFixture<ProductOrderCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOrderCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOrderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
