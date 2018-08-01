import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MyAccountService } from './service/my-account.service';
import { ShowMovieComponent } from './component/general/show-movie/show-movie.component';
import { MovieFinderComponent } from './component/research-movie/movie-finder/movie-finder.component';
import { ResearchBarComponent } from './component/research-movie/research-bar/research-bar.component';
import { AppRouterModule } from './client-router/app-router.module';
import { MovieLikeComponent } from './component/movie-like/movie-like/movie-like.component';
import { MyProfileComponent } from './component/my-profile/my-profile/my-profile.component';
import { RecommendationComponent } from './component/recommendation/recommendation/recommendation.component';
import { SocialComponent } from './component/social/social/social.component';
import { ConnectionComponent } from './component/connection/connection/connection.component';
import { NavMenuComponent } from './component/nav-menu/nav-menu/nav-menu.component';
import { AuthService } from './service/auth.service';
import { ConnectionRequierComponent } from './component/general/connection-requier/connection-requier.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { CorrelationMoviesComponent } from './component/movie-like/correlation-movies/correlation-movies.component';
import { ProfileBoxComponent } from './component/nav-menu/profile-box/profile-box.component';
import { ShowUserComponent } from './component/my-profile/show-user/show-user.component';
import { MoviePreferencesComponent } from './component/my-profile/movie-preferences/movie-preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMovieComponent,
    MovieFinderComponent,
    ResearchBarComponent,
    MovieLikeComponent,
    MyProfileComponent,
    RecommendationComponent,
    SocialComponent,
    ConnectionComponent,
    NavMenuComponent,
    ConnectionRequierComponent,
    CorrelationMoviesComponent,
    ProfileBoxComponent,
    ShowUserComponent,
    MoviePreferencesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    NgxPaginationModule
  ],
  providers: [MyAccountService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
