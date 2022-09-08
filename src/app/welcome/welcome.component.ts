import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  order = false;
  orderPlaced = false;
  checkout = false;
  finalOrder;

  menu = [
    { foodId: 1, foodName: "Spaghetti", price: 12, checked: false, description: "Pasta with sauce." },
    { foodId: 2, foodName: "Salmon", price: 18, checked: false, description: "Pan seared Salmon."},
    { foodId: 3, foodName: "Fish and Chips", price: 14, checked: false, description: "Fried fish with fries and coleslaw." },
    { foodId: 4, foodName: "Chicken Pot Pie", price: 10, checked: false, description: "Nice and warm." },
    { foodId: 5, foodName: "Chocolate Cake", price: 7, checked: false, description: "Topped with chocolate sauce and whipped cream." }
  ];

  orderBool() {
    this.order = !this.order;
  }

  checkoutBool() {
    this.checkout = !this.checkout;
  }

  getList(orderedItems: any) {
    this.finalOrder = orderedItems;
    this.order = !this.order;
    this.orderPlaced = !this.orderPlaced;
  }


}
