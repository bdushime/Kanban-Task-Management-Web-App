import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'kanban-theme';
  private isDarkModeSubject = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.initializeTheme();
    }
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      // Default to dark
      this.setTheme(true);
    }
  }

  toggleTheme() {
    this.setTheme(!this.isDarkModeSubject.value);
  }

  private setTheme(isDark: boolean) {
    this.isDarkModeSubject.next(isDark);
    
    if (typeof window !== 'undefined') {
      if (window.localStorage) {
        localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
      }
      
      if (isDark) {
        document.body.removeAttribute('data-theme');
      } else {
        document.body.setAttribute('data-theme', 'light');
      }
    }
  }

  get isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }
}
