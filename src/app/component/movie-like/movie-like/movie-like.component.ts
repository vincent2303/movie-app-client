import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../../service/my-account.service';
import { Movie } from '../../../class/movie';

@Component({
  selector: 'app-movie-like',
  templateUrl: './movie-like.component.html',
  styleUrls: ['./movie-like.component.css']
})
export class MovieLikeComponent implements OnInit {

  private titleSearch: String
  private movieFinded: Movie[]
  private selectedMovie: Movie

  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {
  }

  public findMovie(){
    this.myAccountService.movieLike(this.titleSearch).subscribe(movies=>{
      this.movieFinded = movies
    })
  }

  private selection(movie: Movie){
    this.selectedMovie = movie
  }
}
