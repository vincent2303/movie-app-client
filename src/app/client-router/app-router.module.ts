import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieFinderComponent } from '../component/research-movie/movie-finder/movie-finder.component';
import { ConnectionComponent } from '../component/connection/connection/connection.component';
import { MovieLikeComponent } from '../component/movie-like/movie-like/movie-like.component';
import { MyProfileComponent } from '../component/my-profile/my-profile/my-profile.component';
import { SocialComponent } from '../component/social/social/social.component';
import { RecommendationComponent } from '../component/recommendation/recommendation/recommendation.component';

const routes: Routes = [
  { path: 'connection', component: ConnectionComponent },
  { path: 'movieFinder', component: MovieFinderComponent },
  { path: 'movieLike', component: MovieLikeComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'myProfile', component: MyProfileComponent },
  { path: 'social', component: SocialComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})



export class AppRouterModule { }
