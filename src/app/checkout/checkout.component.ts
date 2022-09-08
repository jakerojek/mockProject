import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.calculateBill();
  }

  @Input() bill;
  finalItems: any[] = [];
  paid = false;
  
  menu = [
    { foodId: 0},
    { foodId: 1, foodName: "Spaghetti", price: 12, checked: false, description: "Pasta with sauce." },
    { foodId: 2, foodName: "Salmon", price: 18, checked: false, description: "Pan seared Salmon."},
    { foodId: 3, foodName: "Fish and Chips", price: 14, checked: false, description: "Fried fish with fries and coleslaw." },
    { foodId: 4, foodName: "Chicken Pot Pie", price: 10, checked: false, description: "Nice and warm." },
    { foodId: 5, foodName: "Chocolate Cake", price: 7, checked: false, description: "Topped with chocolate sauce and whipped cream." }
  ];

  calculateBill() {
    for(let i = 0; i<this.bill.length; i++) {
      this.finalItems.push(this.menu[this.bill[i]]);
    }

  }

  payBill() {
    this.paid = true;
  }

}
