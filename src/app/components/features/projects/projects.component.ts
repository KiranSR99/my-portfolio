import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section/section.component';
import { CardComponent } from '../../shared/card/card.component';
import { LucideAngularModule, Folder } from 'lucide-angular';

interface Project {
  title: string;
  description: string;
  tech: string[];
}

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
              
              <ul class="flex flex-wrap gap-x-4 gap-y-2 mt-auto font-mono text-xs text-text-muted/60">
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
  // readonly GithubIcon = Github;
  // readonly ExternalLinkIcon = ExternalLink;
  projects: Project[] = [
    {
      title: 'Project One',
      description: 'A brief description of what this project does and how it was built. Focus on the problem solved. This description is intentionally a bit longer to test card alignment.',
      tech: ['Angular', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Project Two',
      description: 'Another cool project that demonstrates backend integration and state management.',
      tech: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Project Three',
      description: 'A mobile-responsive web application with complex UI interactions.',
      tech: ['Vue.js', 'Vuex', 'Firebase']
    },
    {
      title: 'Project Four',
      description: 'An experimental project exploring WebGL and 3D graphics in the browser.',
      tech: ['Three.js', 'React', 'WebGL']
    }
  ];
}
