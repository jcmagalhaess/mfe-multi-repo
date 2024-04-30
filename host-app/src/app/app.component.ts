import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public changeMeText: string = 'This is HOST Application';

  constructor() {
    window.addEventListener('controlHostText', (e: any) => {
      this.changeMeText = e.detail;
    })
  }

  public handleCounter() {
    const customEvent = new Event('controlMfeCounter');
    window.dispatchEvent(customEvent);
  }
}
