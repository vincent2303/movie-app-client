import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../../service/my-account.service';
import { Movie } from '../../../class/movie';
import { GenrePreference } from '../../../class/genrePreference';
import { genres } from '../../../const/genres';

@Component({
  selector: 'app-movie-preferences',
  templateUrl: './movie-preferences.component.html',
  styleUrls: ['./movie-preferences.component.css']
})
export class MoviePreferencesComponent implements OnInit {

  private myGenresPreferences: Map<String, GenrePreference> = new Map() // genre --> user preference on this genre
  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {
    genres.forEach(genre => { // init map myGenresPreferences
      this.myGenresPreferences.set(genre, {genre: genre, avg:0, numberMovie:0})
    });
    this.myAccountService.getMoviesWithRecId(Array.from(this.myAccountService.userRatingMap.keys())).subscribe(movies=>{
      movies.forEach(movie => {
        movie.genres.forEach(genre => {
          let previousGenrePrefenrence: GenrePreference = this.myGenresPreferences.get(genre)
          previousGenrePrefenrence.numberMovie += 1
          previousGenrePrefenrence.avg += this.myAccountService.userRatingMap.get(movie.recId)
        });
      });
      console.log(this.myGenresPreferences)
    })
  }
}
