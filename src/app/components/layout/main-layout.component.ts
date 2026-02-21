import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarLeftComponent, SidebarRightComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col font-sans">
      <app-header />
      
      <div class="flex flex-1 relative">
        <app-sidebar-left class="hidden md:block w-20 fixed left-4 bottom-0 top-(--header-height,56px)" />
        
        <main class="flex-1 w-full max-w-5xl mx-auto px-6 md:px-24 xl:px-6 transition-all duration-300">
          <router-outlet />
        </main>
        
        <app-sidebar-right class="hidden md:block w-20 fixed right-4 bottom-0 top-(--header-height,56px)" />
      </div>

      <app-footer />
    </div>
  `,
  styles: []
})
export class MainLayoutComponent { }
