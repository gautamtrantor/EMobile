import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiterProductsComponent } from './fiter-products.component';

describe('FiterProductsComponent', () => {
  let component: FiterProductsComponent;
  let fixture: ComponentFixture<FiterProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiterProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
