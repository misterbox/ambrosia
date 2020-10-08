import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  readonly purchaseItemFormGroup = {
        name: ['', Validators.required],
        price: ['', [Validators.required]],
        brand: ['', Validators.required],
        category: ['', Validators.required],
        unit: ['', Validators.required],
        unit_qty: ['', Validators.required],
        purchase_qty: ['', Validators.required]
  };

  public purchaseForm = this.formBuilder.group({
    merchantName: ['', Validators.required],
    purchaseDate: ['', Validators.required],
    purchaseItems: this.formBuilder.array([
      this.formBuilder.group(this.purchaseItemFormGroup)
    ])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  get purchaseItems(): FormArray {
    return this.purchaseForm.get('purchaseItems') as FormArray;
  }

  get purchaseTotal(): number {
    let purchaseTotal = 0.0;
    this.purchaseItems.controls.forEach(control => purchaseTotal += +control.get('price').value);

    return purchaseTotal;
  }

  addPurchaseItem(): void {
    this.purchaseItems.push(this.formBuilder.group(this.purchaseItemFormGroup));
  }

  public submit() {
    console.log('items: ', this.purchaseItems);
  }

}
