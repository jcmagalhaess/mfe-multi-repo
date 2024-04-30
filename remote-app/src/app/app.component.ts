import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterIndexComponent } from './counter/container/counter-index/counter-index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterIndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'remote-app';
}
