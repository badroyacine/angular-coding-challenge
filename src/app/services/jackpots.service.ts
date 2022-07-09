import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jackpot } from '../models/jackpot.model';

@Injectable({
  providedIn: 'root'
})
export class JackpotsService {

  baseUrl: string = environment.backendUrl;
  jackpots: Jackpot [] = [];

  private jackpots$ = new BehaviorSubject<Jackpot[]>([]);
  allJackpots$ = this.jackpots$.asObservable();

  constructor(private http: HttpClient) { }

  getAllJackpots(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>(`${this.baseUrl}/jackpots.php`)
      .pipe(
        tap(jackpots => {
          this.jackpots = [...jackpots]
          this.jackpots$.next(jackpots)
        })
      );
  }
  
}
