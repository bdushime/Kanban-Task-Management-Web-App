import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-board-details',
  imports: [],
  templateUrl: './board-details.component.html',
  styleUrl: './board-details.component.css',
})
export class BoardDetailsComponent implements OnInit {
 boardId: string | null = null;

 constructor(private route:ActivatedRoute){}

 ngOnInit(): void {
  this.route.paramMap.subscribe(params =>{
    this.boardId = params.get('id');
    console.log('Angular router says the current board ID is:',this.boardId);
  });
 }



}
