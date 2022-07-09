import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { JackpotsService } from 'src/app/services/jackpots.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game = { id: '', name: '', categories: [], image: '' };
  @Input() jackpotAmount: number | undefined;
  @Input() currentCategory: string = '';
  @Input() isWebDevice: boolean = false;

  constructor(private jackpotsService: JackpotsService) { }

  ngOnInit(): void {
    this.jackpotsService.allJackpots$.pipe(
      map(jackpots => jackpots.find(jackpot => jackpot.game === this.game.id)),
    ).subscribe(jackpots => {
      if(jackpots){
        this.jackpotAmount = jackpots.amount;
      }
    })
  }

  get displayTopRibbon() { return this.game.categories.includes('top') && this.currentCategory !== 'top' }
  get displayNewRibbon() { return this.game.categories.includes('new') && this.currentCategory !== 'new' }

}
