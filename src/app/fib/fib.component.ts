import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  result: number;
  value: number;
  position: number;

  constructor() { }

  ngOnInit() {
    this.result = 0;
    this.value = 0;
    this.position = 0;
  }

  getNumber(input) {
    this.position = 1;
    if (input.value == 0) {
      this.result = 0;
    } else {
      this.result = this.doFib(1, 1, input.value);
      console.log('this.result', this.result);
    }
  }

  doFib(last: number, current: number, stop: number) {
    let newCurrent: number = stop == 1 ? 1 : last + current;
    if (this.position < stop) {
      console.log('last, current', last, current);
      this.position++;
      return this.doFib(current, newCurrent, stop);
    } else {
      return current;
    }
  }
}
