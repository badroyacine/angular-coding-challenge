import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { GameComponent } from './components/games/game/game.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GameRibbonComponent } from './components/games/game-ribbon/game-ribbon.component';
import { EmptyResultsCardComponent } from './components/ui/empty-results-card/empty-results-card.component';
import { LoaderComponent } from './components/ui/loader/loader.component';
import { ServerErrorComponent } from './components/ui/server-error/server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GameComponent,
    NavbarComponent,
    PageNotFoundComponent,
    GameRibbonComponent,
    EmptyResultsCardComponent,
    LoaderComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
