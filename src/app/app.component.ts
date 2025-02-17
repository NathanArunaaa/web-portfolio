import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransitionOverlayComponent } from './components/transition-overlay/transition-overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransitionOverlayComponent],
  template: `
    <router-outlet></router-outlet>
    <app-transition-overlay></app-transition-overlay>
  `
})
export class AppComponent {
  title = 'web-portfolio';
}
