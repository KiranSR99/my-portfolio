import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { PROFILE } from '../../../data/portfolio.data';

@Component({
  selector: 'app-sidebar-left',
  imports: [CommonModule, LucideAngularModule],
  template: `
    <aside
      class="fixed bottom-0 left-0 hidden md:flex flex-col items-center w-24 gap-6 pb-8 after:content-[''] after:w-px after:h-24 after:bg-(--text-muted) after:opacity-50 after:block"
    >
      <div class="flex flex-col gap-5">
        <a
          [href]="profile.github"
          target="_blank"
          class="group p-2 text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          aria-label="GitHub"
        >
          <span
            class="w-6 h-6 bg-current transition-colors duration-300"
            style="mask: url('/socials/github.svg') no-repeat center; -webkit-mask: url('/socials/github.svg') no-repeat center;"
          ></span>
        </a>
        <a
          [href]="profile.linkedIn"
          target="_blank"
          class="group p-2 text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <span
            class="w-5 h-5 bg-current transition-colors duration-300"
            style="mask: url('/socials/linkedin.svg') no-repeat center; -webkit-mask: url('/socials/linkedin.svg') no-repeat center;"
          ></span>
        </a>
        <a
          [href]="profile.x"
          target="_blank"
          class="group p-2 text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          aria-label="X (formerly Twitter)"
        >
          <span
            class="w-5 h-5 bg-current transition-colors duration-300"
            style="mask: url('/socials/x.svg') no-repeat center; -webkit-mask: url('/socials/x.svg') no-repeat center;"
          ></span>
        </a>
        <a
          [href]="profile.instagram"
          target="_blank"
          class="group p-2 text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          aria-label="Instagram"
        >
          <span
            class="w-5 h-5 bg-current transition-colors duration-300"
            style="mask: url('/socials/instagram.svg') no-repeat center; -webkit-mask: url('/socials/instagram.svg') no-repeat center;"
          ></span>
        </a>
      </div>
    </aside>
  `,
})
export class SidebarLeftComponent {
  readonly profile = PROFILE;
}
