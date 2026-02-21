import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-section',
    imports: [CommonModule],
    template: `
    <section #sectionRef [id]="id" class="py-10 md:py-12 scroll-mt-24 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
      <div class="flex items-center gap-4 mb-10">
        <span class="font-mono text-primary text-lg md:text-xl">{{ number }}.</span>
        <h2 class="font-mono text-2xl md:text-3xl font-bold text-foreground">{{ heading }}</h2>
        <div class="h-px bg-gray-400! dark:bg-gray-600! flex-1 ml-4"></div>
      </div>
      
      <ng-content></ng-content>
    </section>
  `,
    styles: [`
    :host ::ng-deep .reveal-active {
      opacity: 1;
      transform: translateY(0);
    }
    .reveal-active {
        opacity: 1;
        transform: translateY(0);
    }
  `]
})
export class SectionComponent implements AfterViewInit {
    @Input() id = '';
    @Input() number = '01';
    @Input() heading = '';

    @ViewChild('sectionRef') sectionRef!: ElementRef;

    ngAfterViewInit() {
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(this.sectionRef.nativeElement);
        } else {
            // Fallback for no IO support
            this.sectionRef.nativeElement.classList.add('reveal-active');
        }
    }
}
