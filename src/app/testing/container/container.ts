import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';
import { Test } from '../test/test';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Sidebar,
    Footer,
    Test
  ],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container implements OnInit, OnDestroy {
  @ViewChild('mainContent') mainContent!: ElementRef;
  
  isHeaderSticky = false;
  headerHeight = 80;
  sidebarHeight = 0;
  isSidebarMinimized = false;
  private scrollListener: (() => void) | null = null;
  private throttleTimer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.calculateSidebarHeight();
    this.setupScrollListener();
    window.addEventListener('resize', () => this.calculateSidebarHeight());
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.throttleTimer) {
      clearTimeout(this.throttleTimer);
    }
    window.removeEventListener('resize', () => this.calculateSidebarHeight());
  }

  toggleSidebar() {
    this.isSidebarMinimized = !this.isSidebarMinimized;
  }

  private setupScrollListener() {
    this.scrollListener = () => {
      if (this.throttleTimer) return;
      
      this.throttleTimer = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const shouldBeSticky = scrollPosition > 20;
        
        if (this.isHeaderSticky !== shouldBeSticky) {
          this.isHeaderSticky = shouldBeSticky;
          this.headerHeight = this.isHeaderSticky ? 60 : 80;
          this.calculateSidebarHeight();
          this.cdr.detectChanges();
        }
        
        this.throttleTimer = null;
      }, 100);
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  private calculateSidebarHeight() {
    const availableHeight = window.innerHeight - this.headerHeight;
    this.sidebarHeight = Math.max(availableHeight, 0);
  }
}
