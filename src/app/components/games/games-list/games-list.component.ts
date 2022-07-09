import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { map } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';
import { JackpotsService } from 'src/app/services/jackpots.service';
import { menuCategories, otherCategories } from 'src/app/utils/categories';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games: Game[] = [];
  category: string = '';
  isWebDevice: boolean = false;

  constructor(
    private gamesService: GamesService,
    private jackpotsService: JackpotsService,
    private route: ActivatedRoute,
    private deviceService: DeviceDetectorService,
    private router: Router
  ) {
    this.isWebDevice = this.deviceService.isDesktop();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.category = params.get('category') || '';

        this.gamesService.allgames$.pipe(
          map(games => {
            if(!menuCategories.find(el => el.name === this.category)){
              this.router.navigateByUrl('redirect/not-found')
            }
            if(this.category === 'jackpots')  {
              return games.filter(game => this.jackpotsService.jackpots.find(el => game.id === el.game))
            }
            return games.filter(
              game => this.category !== 'other' ? game.categories.includes(this.category) : game.categories.some((el: string) => otherCategories.includes(el))
            )
          })

        ).subscribe(currentCategoryGames => {
          this.games = currentCategoryGames
        });
      })
  }

}
