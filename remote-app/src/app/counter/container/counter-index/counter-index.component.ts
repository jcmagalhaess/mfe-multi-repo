import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter-index.component.html',
  styleUrl: './counter-index.component.scss'
})
export class CounterIndexComponent {
  public counter: number = 0;

  public handleCounter() {
    this.counter++
  }
}
