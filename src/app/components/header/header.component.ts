import { Component } from '@angular/core';
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
  boardName = '';

  constructor(
    private router: Router,
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.boardService.activeBoardName$.subscribe(name => {
      this.boardName = name;
    });
  }

  goToSettings() {
    this.router.navigate(['/settings'])
  }
}
