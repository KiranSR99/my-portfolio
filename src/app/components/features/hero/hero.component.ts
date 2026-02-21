import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { LucideAngularModule, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, ButtonComponent, LucideAngularModule],
  template: `
    <section class="min-h-[90vh] flex flex-col justify-center items-start animate-fade-in-up">
      <span class="font-mono text-primary mb-6 text-sm md:text-base tracking-widest">Hi, my name is</span>
      
      <div class="space-y-2 mb-8">
        <h1 class="font-mono font-bold text-4xl md:text-6xl lg:text-7xl text-foreground">
          Kiran Shrestha.
        </h1>
        
        <h2 class="font-mono font-bold text-3xl md:text-5xl lg:text-6xl text-text-muted leading-tight">
          I build things for the web.
        </h2>
      </div>
      
      <p class="text-description max-w-xl mb-12">
        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
      </p>

      <app-button variant="primary" (click)="scrollToProjects()" class="group">
        Check out my work!
      </app-button>
    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `]
})
export class HeroComponent {
  readonly ExternalLinkIcon = ExternalLink;
  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
