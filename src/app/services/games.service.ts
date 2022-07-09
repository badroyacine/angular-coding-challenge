import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl: string = environment.backendUrl;
  private games$ = new BehaviorSubject<Game[]>([]);
  allgames$ = this.games$.asObservable();

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}games.php`)
      .pipe(
        tap(games => this.games$.next(games))
      );
  }
}
