import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'boards', pathMatch: 'full' },
  {
    path: 'boards',
    loadComponent: () => import('./features/boards/boards.component').then(m => m.BoardsComponent)
  },
  {
    path: 'boards/:id',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () => import('./features/boards/board-details/board-details.component').then(m => m.BoardDetailsComponent)
  }
];
