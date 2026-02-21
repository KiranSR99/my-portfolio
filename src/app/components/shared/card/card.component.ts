import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  template: `
    <div class="h-full bg-surface rounded-lg p-6 shadow-sm hover:translate-y-[-4px] hover:shadow-md transition-all duration-300 border border-gray-800">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent { }
