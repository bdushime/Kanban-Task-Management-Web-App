import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Board, BoardData, Task } from '../models/board.model';
import boardDataJson from '../../../public/assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private activeBoardNameSubject = new BehaviorSubject<string>('Platform Launch');
  activeBoardName$ = this.activeBoardNameSubject.asObservable();
  
  public boards: Board[] = [];

  constructor() {
    this.loadInitialData();
  }

  private loadInitialData() {
    const data = boardDataJson as BoardData;
    this.boards = data.boards;
  }

  getBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: number): Board | undefined {
    return this.boards[id];
  }

  setActiveBoardName(name: string) {
    this.activeBoardNameSubject.next(name);
  }
}

