import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/board.model';
import { OnInit } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  boards: Board[] = [];
  activeIndex = 0;

  constructor(
    private boardService: BoardService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.boards = this.boardService.getBoards();
  }

  selectBoard(index: number) {
    this.activeIndex = index;
  }

  onBoardClick() {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.toggleSidebar.emit();
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
