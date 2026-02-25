import { Component, signal, OnDestroy, Renderer2, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { LucideAngularModule, Moon, Sun, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  host: {
    'class': 'sticky top-0 left-0 right-0 z-50 w-full block',
  },
  template: `
    <header class="w-full backdrop-blur-md bg-(--header-bg) border-b border-(--border-color) h-14 flex items-center justify-between px-6 transition-all duration-300">
      <button (click)="navigateHome()" class="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer" aria-label="Go to home">
        <img src="letter-k.png" alt="Logo" class="w-8 h-8">
      </button>
      
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
      <button (click)="toggleMenu()" class="md:hidden p-2 text-primary ml-auto" aria-label="Toggle Menu">
        <lucide-icon [img]="isMenuOpen() ? XIcon : MenuIcon" class="w-6 h-6"></lucide-icon>
      </button>
    </header>

    <!-- Mobile Drawer Overlay/Backdrop -->
    @if (isMenuOpen()) {
      <div (click)="closeMenu()" class="fixed inset-0 z-40" [attr.aria-hidden]="true"></div>
    }

    <!-- Mobile Drawer -->
    <aside 
      [class.translate-x-full]="!isMenuOpen()"
      [class.translate-x-0]="isMenuOpen()"
      class="fixed top-0 right-0 h-screen w-64 bg-black/20 backdrop-blur-sm border-l border-(--border-color) z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 pb-16 overflow-y-auto shadow-xl"
      [attr.aria-hidden]="!isMenuOpen()"
      role="navigation">
      
      <!-- Close Button -->
      <div class="flex justify-end mb-8">
        <button (click)="closeMenu()" class="p-2 rounded-lg transition-colors text-primary" aria-label="Close Menu">
          <lucide-icon [img]="XIcon" class="w-6 h-6"></lucide-icon>
        </button>
      </div>

      <!-- Navigation Links -->
      <nav class="flex flex-col gap-6 font-mono text-lg mb-8 text-white">
        <a href="#about" (click)="closeMenu()">01. About</a>
        <a href="#experience" (click)="closeMenu()">02. Experience</a>
        <a href="#projects" (click)="closeMenu()">03. Projects</a>
        <a href="#contact" (click)="closeMenu()">04. Contact</a>
      </nav>

      <!-- Theme Toggle -->
      <div class="mt-auto border-t border-(--border-color) pt-6 flex items-center justify-between">
        <span class="font-mono text-sm text-white">Switch Theme</span>
        <button (click)="themeService.toggleTheme()" class="p-3 rounded-xl bg-primary text-white">
          <lucide-icon [img]="themeService.darkMode() ? SunIcon : MoonIcon" class="w-5 h-5"></lucide-icon>
        </button>
      </div>
    </aside>
  `
})
export class HeaderComponent implements OnDestroy {
  readonly MoonIcon = Moon;
  readonly SunIcon = Sun;
  readonly MenuIcon = Menu;
  readonly XIcon = X;

  isMenuOpen = signal(false);
  private scrollPosition = 0;

  constructor(
    public themeService: ThemeService,
    private renderer: Renderer2,
    private router: Router
  ) { }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
    this.updateBodyScroll();
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    this.updateBodyScroll();
  }

  navigateHome() {
    this.router.navigate(['/']);
    window.scrollTo(0, 0);
  }

  @HostListener('window:keydown.escape')
  onEscapeKey() {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }

  private updateBodyScroll() {
    const body = document.documentElement;

    if (this.isMenuOpen()) {
      // Save current scroll position
      this.scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Lock scroll
      this.renderer.setStyle(body, 'overflow', 'hidden');
      this.renderer.setStyle(body, 'position', 'fixed');
      this.renderer.setStyle(body, 'top', `-${this.scrollPosition}px`);
      this.renderer.setStyle(body, 'left', '0');
      this.renderer.setStyle(body, 'right', '0');
      this.renderer.setStyle(body, 'width', '100%');
    } else {
      // Unlock scroll
      this.renderer.removeStyle(body, 'overflow');
      this.renderer.removeStyle(body, 'position');
      this.renderer.removeStyle(body, 'top');
      this.renderer.removeStyle(body, 'left');
      this.renderer.removeStyle(body, 'right');
      this.renderer.removeStyle(body, 'width');

      // Restore scroll position
      if (this.scrollPosition > 0) {
        window.scrollTo(0, this.scrollPosition);
      }
    }
  }

  ngOnDestroy() {
    // Cleanup on component destroy
    const body = document.documentElement;
    this.renderer.removeStyle(body, 'overflow');
    this.renderer.removeStyle(body, 'position');
    this.renderer.removeStyle(body, 'top');
    this.renderer.removeStyle(body, 'left');
    this.renderer.removeStyle(body, 'right');
    this.renderer.removeStyle(body, 'width');
  }
}
