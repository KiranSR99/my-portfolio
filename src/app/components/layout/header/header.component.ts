import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { LucideAngularModule, Moon, Sun, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  host: {
    'class': 'sticky top-0 z-50 w-full block',
    '[style.--header-height]': "'56px'"
  },
  template: `
    <header class="w-full backdrop-blur-md bg-(--header-bg) border-b border-(--border-color) h-14 flex items-center justify-between px-6 transition-all duration-300">
      <div>
        <img src="letter-k.png" alt="Logo" class="w-10 h-10">
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-8 font-mono text-sm">
        <a href="#about" class="font-medium hover:text-primary transition-colors">About</a>
        <a href="#experience" class="font-medium hover:text-primary transition-colors">Experience</a>
        <a href="#projects" class="font-medium hover:text-primary transition-colors">Projects</a>
        <a href="#contact" class="font-medium hover:text-primary transition-colors">Contact</a>
      </nav>

      <!-- Desktop Theme Toggle -->
      <div class="hidden md:flex items-center gap-4">
        <button (click)="themeService.toggleTheme()" class="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors" aria-label="Toggle Theme">
            <lucide-icon [img]="themeService.darkMode() ? SunIcon : MoonIcon" class="w-5 h-5 text-primary"></lucide-icon>
        </button>
      </div>

      <!-- Mobile Menu Toggle -->
      <button (click)="toggleMenu()" class="md:hidden p-2 text-primary" aria-label="Toggle Menu">
        <lucide-icon [img]="isMenuOpen() ? XIcon : MenuIcon" class="w-6 h-6"></lucide-icon>
      </button>

      <!-- Mobile Drawer Overlay -->
      <div *ngIf="isMenuOpen()" 
           (click)="closeMenu()"
           class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden">
      </div>

      <!-- Mobile Drawer -->
      <aside [class.translate-x-full]="!isMenuOpen()"
             [class.translate-x-0]="isMenuOpen()"
             class="fixed top-0 right-0 h-full w-[280px] bg-surface border-l border-(--border-color) z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col p-8">
        
        <div class="flex justify-end mb-8">
          <button (click)="closeMenu()" class="text-primary p-2">
            <lucide-icon [img]="XIcon" class="w-6 h-6"></lucide-icon>
          </button>
        </div>

        <nav class="flex flex-col gap-6 font-mono text-lg mb-8">
          <a href="#about" (click)="closeMenu()" class="hover:text-primary transition-colors">01. About</a>
          <a href="#experience" (click)="closeMenu()" class="hover:text-primary transition-colors">02. Experience</a>
          <a href="#projects" (click)="closeMenu()" class="hover:text-primary transition-colors">03. Projects</a>
          <a href="#contact" (click)="closeMenu()" class="hover:text-primary transition-colors">04. Contact</a>
        </nav>

        <div class="mt-auto border-t border-(--border-color) pt-6 flex items-center justify-between">
          <span class="font-mono text-sm text-text-muted">Switch Theme</span>
          <button (click)="themeService.toggleTheme()" class="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
            <lucide-icon [img]="themeService.darkMode() ? SunIcon : MoonIcon" class="w-5 h-5"></lucide-icon>
          </button>
        </div>
      </aside>
    </header>
  `
})
export class HeaderComponent {
  readonly MoonIcon = Moon;
  readonly SunIcon = Sun;
  readonly MenuIcon = Menu;
  readonly XIcon = X;

  isMenuOpen = signal(false);

  constructor(public themeService: ThemeService) { }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}
