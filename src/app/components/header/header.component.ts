import { Component, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Output() toggleMobileSidebar = new EventEmitter<void>();
  boardName = '';

  isOptionsMenuOpen = false;

  constructor(
    private router: Router,
    private boardService: BoardService,
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.boardService.activeBoardName$.subscribe(name => {
      this.boardName = name;
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOptionsMenuOpen = false;
    }
  }

  toggleOptionsMenu() {
    this.isOptionsMenuOpen = !this.isOptionsMenuOpen;
  }

  editBoard() {
    console.log('Edit Board');
    this.isOptionsMenuOpen = false;
  }

  deleteBoard() {
    console.log('Delete Board');
    this.isOptionsMenuOpen = false;
  }
}
