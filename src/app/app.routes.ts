import { Routes } from '@angular/router';
import { BoardsComponent } from './features/boards/boards.component';
import { BoardDetailsComponent } from './features/boards/board-details/board-details.component';
export const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent
  },
  {
    path: 'boards/:id',
    component: BoardDetailsComponent
  }

];
