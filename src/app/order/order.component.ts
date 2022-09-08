import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form: FormGroup;
  @Output() orderEvent = new EventEmitter<any>();
  menu = [];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      orders: new FormArray([], minSelectedCheckboxes(1))
    });

    of(this.getOrders()).subscribe(orders => {
      this.menu = orders;
      this.addCheckboxes();
    })
  }

  private addCheckboxes() {
    this.menu.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  //If the backend was running successfully, I would call a function from my service class that would fill 'menu' with items from the database.
  getOrders() {
    return [
      { foodId: 1, foodName: "Spaghetti", price: 12, checked: false, description: "Pasta with sauce." },
      { foodId: 2, foodName: "Salmon", price: 18, checked: false, description: "Pan seared Salmon."},
      { foodId: 3, foodName: "Fish and Chips", price: 14, checked: false, description: "Fried fish with fries and coleslaw." },
      { foodId: 4, foodName: "Chicken Pot Pie", price: 10, checked: false, description: "Nice and warm." },
      { foodId: 5, foodName: "Chocolate Cake", price: 7, checked: false, description: "Topped with chocolate sauce and whipped cream." }
    ];
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((checked, i) => checked ? this.menu[i].foodId : null)
      .filter(v => v !== null);
    this.orderEvent.emit(selectedOrderIds);
    console.log(selectedOrderIds);
  }

  ngOnInit(): void {
  }

}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);
    return totalSelected >= min ? null : {required: true};
  };
  return validator;
}
