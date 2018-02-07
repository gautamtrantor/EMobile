import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productAddEditForm:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.productAddEditForm = this._fb.group({
      title:['', [Validators.required]],
      category:['', Validators.required],
      price:['', [Validators.required, 
                  Validators.minLength(0), 
                  Validators.maxLength(9999)]],
      imageUrl:['', Validators.required]

    })
  }

  productSubmit(){
    console.log(this.productAddEditForm.value);
  }

}
