import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Twitter } from 'lucide-angular';

@Component({
  selector: 'app-sidebar-left',
  imports: [CommonModule, LucideAngularModule],
  template: `
    <aside class="fixed bottom-0 left-0 hidden md:flex flex-col items-center w-24 gap-8 pb-8 after:content-[''] after:w-px after:h-24 after:bg-(--text-muted) after:opacity-50 after:block">
      <div class="flex flex-col gap-6">
        <a href="https://github.com" target="_blank" class="p-2 text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300" aria-label="Github">
          <lucide-icon [img]="GithubIcon" class="w-5 h-5"></lucide-icon>
        </a>
        <a href="https://linkedin.com" target="_blank" class="p-2 text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
          <lucide-icon [img]="LinkedinIcon" class="w-5 h-5"></lucide-icon>
        </a>
        <a href="https://twitter.com" target="_blank" class="p-2 text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300" aria-label="Twitter">
          <lucide-icon [img]="TwitterIcon" class="w-5 h-5"></lucide-icon>
        </a>
      </div>
    </aside>
  `
})
export class SidebarLeftComponent {
  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;
  readonly TwitterIcon = Twitter;
}
