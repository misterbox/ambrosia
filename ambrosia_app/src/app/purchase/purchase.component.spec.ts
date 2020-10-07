import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { PurchaseComponent } from './purchase.component';

describe('PurchaseComponent', () => {
  let component: PurchaseComponent;
  let fixture: ComponentFixture<PurchaseComponent>;
  const formBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseComponent ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get purchaseTotal', () => {
    it('should return the expected purchase total', () => {
      component.purchaseForm = formBuilder.group({
        purchaseItems: formBuilder.array([
          formBuilder.group({
            price: ['1']
          }),
          formBuilder.group({
            price: ['2']
          })
        ])
      });

      const purchaseTotal = component.purchaseTotal;

      expect(purchaseTotal).toEqual(3);
    });
  });
});
