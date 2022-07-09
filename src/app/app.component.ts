import { Component } from '@angular/core';
import { catchError, filter, Subscription, switchMap, throwError, timer } from 'rxjs';
import { GamesService } from './services/games.service';
import { JackpotsService } from './services/jackpots.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loadingGames: boolean = false;
  loadingJackpots: boolean = false;
  jackpotsSubscription: Subscription = new Subscription();
  loadingError: boolean = false;

  constructor(
    private gamesService: GamesService,
    private jackpotsService: JackpotsService
  ) {
    this.loadingGames = true
    this.loadingJackpots = true
  }

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe(() => this.loadingGames = false)

    this.jackpotsSubscription = timer(0, 5000)
      .pipe(
        switchMap(() => {
          return this.jackpotsService.getAllJackpots()
            .pipe(
              catchError(err => throwError(() => new Error(err)))
            );
        }),
        filter(data => data !== undefined)
      )
      .subscribe(
        () => {
          this.loadingJackpots = false
        },
        err => this.loadingError = true
      );
  }

  ngOnDestroy(): void {
    this.jackpotsSubscription.unsubscribe()
  }

}
