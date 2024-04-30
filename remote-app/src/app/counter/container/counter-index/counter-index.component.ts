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

  constructor() {
    window.addEventListener('controlMfeCounter', () => {
      this.handleCounter();
    })
  }

  public handleCounter() {
    this.counter++
  }

  public handleHostText(e: any) {
    const customEvent = new CustomEvent('controlHostText', { detail: e?.target?.value });

    window.dispatchEvent(customEvent)
  }
}
