import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `
    <footer class="md:hidden flex flex-col items-center py-6 gap-4 border-t border-gray-200 dark:border-gray-800 mt-8">
      <div class="flex gap-6">
        <a href="#" class="hover:text-primary">GitHub</a>
        <a href="#" class="hover:text-primary">LinkedIn</a>
        <a href="#" class="hover:text-primary">Twitter</a>
      </div>
      <div>
        <a href="mailto:your.email@example.com" class="font-mono text-sm hover:text-primary">your.email@example.com</a>
      </div>
      <div class="text-xs text-gray-500 font-mono mt-4">
        Designed & Built by You
      </div>
    </footer>
  `
})
export class FooterComponent { }
