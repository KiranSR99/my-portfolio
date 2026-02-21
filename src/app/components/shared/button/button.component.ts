import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button',
    imports: [CommonModule],
    template: `
    <button
      [ngClass]="getClasses()"
      class="disabled:opacity-50 disabled:cursor-not-allowed"
      (click)="handleClick($event)"
      [type]="type"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
    @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() disabled = false;

    getClasses(): string {
        const baseClasses = 'relative px-6 py-3 rounded text-sm font-mono font-medium transition-all duration-200 focus:outline-none border-2';

        switch (this.variant) {
            case 'primary':
                return `${baseClasses} border-primary text-primary hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--primary)] active:translate-x-0 active:translate-y-0 active:shadow-none`;
            case 'secondary':
                return `${baseClasses} border-secondary text-secondary hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--secondary)] active:translate-x-0 active:translate-y-0 active:shadow-none`;
            case 'ghost':
                return 'px-6 py-3 rounded text-sm font-mono font-medium transition-all duration-300 bg-transparent text-primary hover:bg-primary/10 focus:ring-primary';
            default:
                return `${baseClasses} border-primary text-primary hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--primary)]`;
        }
    }

    handleClick(event: Event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
