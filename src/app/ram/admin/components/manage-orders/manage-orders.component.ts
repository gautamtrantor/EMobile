import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../product/services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  userData:any;

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.userData = data;
    })
  }

}
