import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CagegoryService } from '../../../shared/service/cagegory.service';

@Component({
  selector: 'fiter-products',
  templateUrl: './fiter-products.component.html',
  styleUrls: ['./fiter-products.component.css']
})
export class FiterProductsComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categorySer :CagegoryService) { 
    this.categories$ = categorySer.getAll();
  }

  ngOnInit() {
  }

}
