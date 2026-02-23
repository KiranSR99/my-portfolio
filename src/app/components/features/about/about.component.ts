import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section/section.component';
import { LucideAngularModule, Check } from 'lucide-angular';

@Component({
  selector: 'app-about',
  imports: [CommonModule, SectionComponent, LucideAngularModule],
  template: `
    <app-section id="about" number="01" heading="About Me">
      <div class="grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 text-description space-y-4">
          <p>
            Hello! My name is Kiran Shrestha and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul class="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            @for (tech of technologies; track $index) {
              <li class="flex items-center gap-2">
                <lucide-icon [img]="check" class="w-4 h-4 text-primary"></lucide-icon>
                <span>{{ tech }}</span>
              </li>
            }
          </ul>
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
  readonly check = Check;

  technologies: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'REST APIs',
    'Tailwind CSS',
    'PrimeNG',
    'Postman'
  ];
}
