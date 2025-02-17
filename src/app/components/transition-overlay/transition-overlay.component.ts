import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransitionService } from '../../services/transition.service';

@Component({
  selector: 'app-transition-overlay',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 bg-black transition-opacity duration-500 pointer-events-none"
      [class.opacity-100]="transitionService.fadeState$ | async"
      [class.opacity-0]="!(transitionService.fadeState$ | async)">
    </div>
  `
})
export class TransitionOverlayComponent {
  constructor(public transitionService: TransitionService) {}
}
