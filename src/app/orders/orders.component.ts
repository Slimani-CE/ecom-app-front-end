import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: any;
  customerId!: number;
  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) {
    this.customerId = route.snapshot.params['customerId']
  }

  ngOnInit() {
    if (this.customerId)
      this.getOrdersByCustomerId();
    else
      this.getAllOrders();
  }

  getOrdersByCustomerId() {
    this.http.get(`http://localhost:9999/order-service/orders/search/byCustomerId?customerId=${this.customerId}&projection=fullOrder`).subscribe( {
      next: data => {
        this.orders = data;
      },
      error: err => {}
    });
  }

  private getAllOrders() {
    this.http.get(`http://localhost:9999/order-service/orders?projection=fullOrder`).subscribe( {
      next: data => {
        this.orders = data;
      },
      error: err => {}
    });
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/" + o.id);
  }
}
