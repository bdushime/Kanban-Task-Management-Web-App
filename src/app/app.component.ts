import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme.service';


import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isSidebarOpen = true;
  isLoading = false;

  
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // Close sidebar by default on mobile/tablet
      if (window.innerWidth < 768) {
        this.isSidebarOpen = false;
      }
    }
  }

  constructor(private router: Router, private themeService: ThemeService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true; 
        console.log('Navigation Started...');
      }
      
      if (event instanceof NavigationEnd || 
          event instanceof NavigationCancel || 
          event instanceof NavigationError) {
        this.isLoading = false; 
        console.log('Navigation Finished/Stopped.');
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
