import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styles: ``,
})
export class CounterComponent {
  public counter = 10;

  public increaseDecrease(value: number): void {
    this.counter += value;
  }

  public resetCounter() {
    this.counter = 10;
  }
}
