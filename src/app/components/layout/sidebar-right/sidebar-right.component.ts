import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-right',
  imports: [CommonModule],
  template: `
    <aside class="fixed bottom-0 right-0 hidden md:flex flex-col items-center w-24 gap-8 pb-8 after:content-[''] after:w-px after:h-24 after:bg-(--text-muted) after:opacity-50 after:block">
      <div class="writing-vertical-rl text-sm font-mono tracking-widest text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <a href="mailto:your.email@example.com">your.email@example.com</a>
      </div>
    </aside>
  `,
  styles: [`
    .writing-vertical-rl {
      writing-mode: vertical-rl;
    }
  `]
})
export class SidebarRightComponent { }
