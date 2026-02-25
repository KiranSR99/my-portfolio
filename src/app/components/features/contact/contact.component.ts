import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section/section.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { PROFILE } from '../../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, SectionComponent, ButtonComponent],
  template: `
    <app-section id="contact" number="04" heading="What's Next?">
      <div class="max-w-2xl mx-auto text-center font-sans">
        <h3 class="font-sans font-bold text-4xl md:text-5xl mb-6 text-foreground">Get In Touch</h3>
        <p class="text-description text-center mb-12">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div class="flex justify-center">
            <a [href]="'mailto:' + profile.email">
               <app-button variant="primary">Say Hello</app-button>
            </a>
        </div>
      </div>
    </app-section>
  `
})
export class ContactComponent {
  readonly profile = PROFILE;
}
