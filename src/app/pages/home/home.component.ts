import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/features/hero/hero.component';
import { AboutComponent } from '../../components/features/about/about.component';
import { ExperienceComponent } from '../../components/features/experience/experience.component';
import { ProjectsComponent } from '../../components/features/projects/projects.component';
import { ContactComponent } from '../../components/features/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  template: `
    <div class="flex flex-col gap-12 md:gap-24">
      <app-hero />
      <app-about />
      <app-experience />
      <app-projects />
      <app-contact />
    </div>
  `
})
export class HomeComponent { }
