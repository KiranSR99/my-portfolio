import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `
    <footer
      class="md:hidden flex flex-col items-center py-8 gap-6 border-t border-(--border-color) mt-12 bg-(--background)"
    >
      <div class="flex gap-8">
        <a
          [href]="profile.github"
          target="_blank"
          class="text-text-muted hover:text-primary transition-all duration-300 flex items-center justify-center"
          aria-label="GitHub"
        >
          <span
            class="w-5 h-5 bg-current"
            style="mask: url('/socials/github.svg') no-repeat center; -webkit-mask: url('/socials/github.svg') no-repeat center;"
          ></span>
        </a>
        <a
          [href]="profile.linkedIn"
          target="_blank"
          class="text-text-muted hover:text-primary transition-all duration-300 flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <span
            class="w-5 h-5 bg-current"
            style="mask: url('/socials/linkedin.svg') no-repeat center; -webkit-mask: url('/socials/linkedin.svg') no-repeat center;"
          ></span>
        </a>
        <a
          [href]="profile.x"
          target="_blank"
          class="text-text-muted hover:text-primary transition-all duration-300 flex items-center justify-center"
          aria-label="X (formerly Twitter)"
        >
          <span
            class="w-5 h-5 bg-current"
            style="mask: url('/socials/x.svg') no-repeat center; -webkit-mask: url('/socials/x.svg') no-repeat center;"
          ></span>
        </a>
        <a
          [href]="profile.instagram"
          target="_blank"
          class="text-text-muted hover:text-primary transition-all duration-300 flex items-center justify-center"
          aria-label="Instagram"
        >
          <span
            class="w-5 h-5 bg-current"
            style="mask: url('/socials/instagram.svg') no-repeat center; -webkit-mask: url('/socials/instagram.svg') no-repeat center;"
          ></span>
        </a>
      </div>
      <div class="flex flex-col items-center gap-2">
        <a
          [href]="'mailto:' + profile.email"
          class="font-mono text-sm text-text-muted hover:text-primary transition-colors duration-300"
        >
          {{ profile.email }}
        </a>
        <div class="text-[10px] tracking-widest text-text-muted opacity-60 font-mono mt-2">
          Designed & Built by Me
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly profile = PROFILE;
}
