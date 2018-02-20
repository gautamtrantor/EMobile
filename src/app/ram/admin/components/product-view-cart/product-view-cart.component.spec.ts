import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewCartComponent } from './product-view-cart.component';

describe('ProductViewCartComponent', () => {
  let component: ProductViewCartComponent;
  let fixture: ComponentFixture<ProductViewCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
