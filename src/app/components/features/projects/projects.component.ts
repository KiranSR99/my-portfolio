import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section/section.component';
import { CardComponent } from '../../shared/card/card.component';
import { LucideAngularModule, Folder, Github, ExternalLink } from 'lucide-angular';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, SectionComponent, CardComponent, LucideAngularModule],
  template: `
    <app-section id="projects" number="03" heading="Things I've Built">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <ng-container *ngFor="let project of projects">
          <app-card class="h-full">
            <div class="h-full flex flex-col">
              <div class="flex justify-between items-center mb-6">
                <lucide-icon [img]="FolderIcon" class="w-10 h-10 text-primary stroke-1"></lucide-icon>
                <div class="flex gap-4">
                  <a [href]="project.github" target="_blank" class="text-text-muted hover:text-primary transition-colors" aria-label="GitHub">
                    <lucide-icon [img]="GithubIcon" class="w-5 h-5"></lucide-icon>
                  </a>
                  <a [href]="project.link" target="_blank" class="text-text-muted hover:text-primary transition-colors" aria-label="External Link">
                    <lucide-icon [img]="ExternalLinkIcon" class="w-5 h-5"></lucide-icon>
                  </a>
                </div>
              </div>

              <div class="flex-1">
                 <h3 class="font-mono font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">{{ project.title }}</h3>
                 <p class="text-description mb-6">
                   {{ project.description }}
                 </p>
              </div>
              
              <ul class="flex flex-wrap gap-x-4 gap-y-2 mt-auto font-mono text-xs text-text-muted/60">
                <li *ngFor="let tech of project.tech">{{ tech }}</li>
              </ul>
            </div>
          </app-card>
        </ng-container>
      </div>
    </app-section>
  `
})
export class ProjectsComponent {
  readonly FolderIcon = Folder;
  readonly GithubIcon = Github;
  readonly ExternalLinkIcon = ExternalLink;
  projects: Project[] = [
    {
      title: 'Project One',
      description: 'A brief description of what this project does and how it was built. Focus on the problem solved. This description is intentionally a bit longer to test card alignment.',
      tech: ['Angular', 'TypeScript', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      title: 'Project Two',
      description: 'Another cool project that demonstrates backend integration and state management.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      title: 'Project Three',
      description: 'A mobile-responsive web application with complex UI interactions.',
      tech: ['Vue.js', 'Vuex', 'Firebase'],
      link: '#',
      github: '#'
    },
    {
      title: 'Project Four',
      description: 'An experimental project exploring WebGL and 3D graphics in the browser.',
      tech: ['Three.js', 'React', 'WebGL'],
      link: '#',
      github: '#'
    }
  ];
}
