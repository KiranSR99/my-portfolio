import { Component } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { LucideAngularModule, Check } from 'lucide-angular';
import { JOBS } from '../../../data/portfolio.data';


@Component({
  selector: 'app-experience',
  imports: [SectionComponent, LucideAngularModule],
  template: `
    <app-section id="experience" number="02" heading="Where I've Worked">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Tabs -->
        <div class="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-(--border-color) custom-scrollbar relative">
          @for (job of jobs; track job.company; let i = $index) {
            <button 
              (click)="activeTabIndex = i"
              class="px-5 py-3 text-left font-mono text-xs whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:mb-0 md:-ml-[2px] min-w-[120px] md:min-w-0"
              [class.text-primary]="activeTabIndex === i"
              [class.bg-primary/5]="activeTabIndex === i"
              [class.border-primary]="activeTabIndex === i"
              [class.text-text-muted]="activeTabIndex !== i"
              [class.border-transparent]="activeTabIndex !== i"
              [class.hover:bg-primary/5]="activeTabIndex !== i"
              [class.hover:text-primary]="activeTabIndex !== i"
            >
              {{ job.company }}
            </button>
          }
        </div>

        <!-- Job Details -->
        <div class="flex-1 py-1">
          @if (jobs[activeTabIndex]; as job) {
            <div class="animate-fade-in">
              <h3 class="font-sans font-medium text-xl md:text-2xl text-foreground mb-1">
                {{ job.title }} <span class="text-primary tracking-tight">@ <a [href]="job.url" target="_blank" class="hover:underline decoration-1 underline-offset-4">{{ job.company }}</a></span>
              </h3>
              <p class="font-mono text-xs text-text-muted mb-8">
                {{ job.range }}
              </p>
              <ul class="space-y-4">
                @for (duty of job.duties; track duty) {
                  <li class="flex gap-3 text-description leading-relaxed">
                    <lucide-icon [img]="check" class="w-4 h-4 mt-1 text-primary shrink-0"></lucide-icon>
                    <span>{{ duty }}</span>
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </app-section>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .custom-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class ExperienceComponent {
  readonly check = Check;
  readonly jobs = JOBS;
  activeTabIndex = 0;
}
