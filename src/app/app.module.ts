import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MyAccountService } from './service/my-account.service';
import { ShowMovieComponent } from './component/general/show-movie/show-movie.component';
import { MovieFinderComponent } from './component/research-movie/movie-finder/movie-finder.component';
import { ResearchBarComponent } from './component/research-movie/research-bar/research-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowMovieComponent,
    MovieFinderComponent,
    ResearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
