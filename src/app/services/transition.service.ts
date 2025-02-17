import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {
  private fadeState = new BehaviorSubject<boolean>(false);
  fadeState$ = this.fadeState.asObservable();

  fadeOut() {
    this.fadeState.next(true);
  }

  fadeIn() {
    this.fadeState.next(false);
  }
} 
