import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-ribbon',
  templateUrl: './game-ribbon.component.html',
  styleUrls: ['./game-ribbon.component.scss']
})
export class GameRibbonComponent implements OnInit {

  @Input() color: string = '';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
