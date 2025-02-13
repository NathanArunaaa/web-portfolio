import { Component, AfterViewInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;
  private typed: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('typed.js').then(({ default: Typed }) => {
        const options = {
          strings: ['nathanaruna.com'],
          typeSpeed: 50,
          showCursor: true,
          cursorChar: '|',
          loop: false,
          onComplete: () => {
            setTimeout(() => {
              const portfolioText = document.getElementById('portfolioText');
              if (portfolioText) {
                portfolioText.classList.remove('opacity-0');
                portfolioText.classList.add('opacity-100');
              }
              const portfolioText2 = document.getElementById('portfolioText2');
              if (portfolioText2) {
                portfolioText2.classList.remove('opacity-0');
                portfolioText2.classList.add('opacity-100');
              }
            }, 300);
          }
        };

        this.typed = new Typed(this.typedElement.nativeElement, options);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
