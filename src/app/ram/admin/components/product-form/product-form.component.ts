import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { CagegoryService } from '../../../shared/service/cagegory.service';
import { ProductService } from '../../../shared/service/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productAddEditForm:FormGroup;
  categories$;
  id;
  product = {};

  constructor(
        private router: Router,
        private route : ActivatedRoute,
        private _fb:FormBuilder,
        private _categories : CagegoryService,
        private _productService : ProductService
        ) {
          this.id = this.route.snapshot.paramMap.get('id');
          if(this.id){
            this._productService.get(this.id).take(1).subscribe(p => this.product = p);
          }

          console.log('this.id', this.id);
        }

  ngOnInit() {
    this.productAddEditForm = this._fb.group({
      title:['', [Validators.required]],
      category:['', Validators.required],
      price:['', [Validators.required, 
                  Validators.min(0)]],
      imageUrl:['', Validators.required]

    });

    //this._categories.getAll().subscribe( data => console.log(data));
    this.categories$ = this._categories.getAll();
  }

  productSubmit(){

    if(this.id){
      this._productService.update(this.id, this.productAddEditForm.value);
    }else{
      this._productService.create(this.productAddEditForm.value);
    }

    //console.log(this.productAddEditForm.value);
    
    this.router.navigate(['/admin/products']);
  }
  delete(){
    if (!confirm('Are you sure you want to delete this product?')) return;

    this._productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

}
