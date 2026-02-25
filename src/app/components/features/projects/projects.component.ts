import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section/section.component';
import { CardComponent } from '../../shared/card/card.component';
import { LucideAngularModule, Folder } from 'lucide-angular';
import { PROJECTS } from '../../../data/portfolio.data';


@Component({
  selector: 'app-projects',
  imports: [CommonModule, SectionComponent, CardComponent, LucideAngularModule],
  template: `
    <app-section id="projects" number="03" heading="Things I've Built">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          @for (project of projects; track $index) {
            <app-card class="h-full">
            <div class="h-full flex flex-col">
              <div class="flex justify-between items-center mb-6">
                <lucide-icon [img]="FolderIcon" class="w-10 h-10 text-primary stroke-1"></lucide-icon>
              </div>

              <div class="flex-1">
                 <h3 class="font-mono font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">{{ project.title }}</h3>
                 <p class="text-description mb-6">
                   {{ project.description }}
                 </p>
              </div>
              
              <ul class="flex flex-wrap gap-x-4 gap-y-2 mt-auto font-mono text-xs text-primary">
                @for (tech of project.tech; track $index) {
                  <li>{{ tech }}</li>
                }
              </ul>
            </div>
          </app-card>
          }
      </div>
    </app-section>
  `
})
export class ProjectsComponent {
  readonly FolderIcon = Folder;
  readonly projects = PROJECTS;
}
