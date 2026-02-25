import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section/section.component';
import { LucideAngularModule, Check } from 'lucide-angular';
import { PROFILE } from '../../../data/portfolio.data';

@Component({
  selector: 'app-about',
  imports: [CommonModule, SectionComponent, LucideAngularModule],
  template: `
    <app-section id="about" number="01" heading="About Me">
      <div class="grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 text-description space-y-6">
          <div class="space-y-4 whitespace-pre-line">
            <p>
              {{ profile.aboutSummary }}
            </p>
          </div>

          <div class="space-y-4">
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul class="grid grid-cols-2 gap-2 font-mono text-sm">
              @for (tech of profile.technologies; track tech) {
                <li class="flex items-center gap-2">
                  <lucide-icon [img]="check" class="w-4 h-4 text-primary"></lucide-icon>
                  <span>{{ tech }}</span>
                </li>
              }
            </ul>
          </div>
        </div>
        
        <div class="relative group w-full max-w-[300px] aspect-square mx-auto md:mx-0">
           <!-- Image Container -->
           <div class="relative w-full h-full rounded-md overflow-hidden z-10 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
             <!-- Overlay -->
             <div class="absolute inset-0 lg:bg-primary/20 bg-transparent transition-all duration-500 group-hover:bg-transparent z-20"></div>
             <!-- Image -->
             <div class="w-full h-full bg-(--surface) border border-primary flex items-center justify-center rounded-md">
               <img src="kiran.png" alt="Kiran Shrestha" class="w-full h-full object-cover rounded-md">
             </div>
           </div>
           <!-- Decorative Frame -->
           <div class="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 -z-10 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
        </div>
      </div>
    </app-section>
  `
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly check = Check;
}
