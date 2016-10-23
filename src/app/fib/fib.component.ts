import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  @Input() value: number;
  result: number;
  position: number;

  constructor() { }

  ngOnInit() {
    this.result = 0;
    this.value = 0;
    this.position = 0;
  }

  ngOnChanges() {
    this.getNumber();
  }

  getNumber() {
    this.position = 1;
    if (this.value == 0) {
      this.result = 0;
    } else {
      this.result = this.doFib(1, 1);
    }
  }

  doFib(last: number, current: number) {
    let newCurrent: number = this.value == 1 ? 1 : last + current;
    if (this.position < this.value) {
      console.log('last, current', last, current);
      this.position++;
      return this.doFib(current, newCurrent);
    } else {
      return current;
    }
  }
}
