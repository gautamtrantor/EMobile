import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../product/services/order.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  userId:string;
  userData:any;

  constructor(private orderService:OrderService, private authService:AuthService) { }

  async ngOnInit() {
    await this.authService.user$.subscribe(data => {
      this.userId = data.uid;
    })
    this.orderService.getOrdersByUser(this.userId).subscribe(data => {
      this.userData = data;
      console.log('this.userData', this.userData);
    })

  }

}
