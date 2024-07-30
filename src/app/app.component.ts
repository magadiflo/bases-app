import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'Aplicación Base';
  public counter = 10;

  public increaseDecrease(value: number): void {
    this.counter += value;
  }

  public resetCounter() {
    this.counter = 10;
  }
}
