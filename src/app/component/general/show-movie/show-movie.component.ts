import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../class/movie';
import { MyAccountService } from '../../../service/my-account.service';
import { Rating } from '../../../class/rating';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  @Input() private movie: Movie

  private newRating: Rating

  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {
    this.newRating = {movieRecId: this.movie.recId, rating: this.initNote()}
  }

  private movieRating(){
    this.myAccountService.movieRating(this.newRating)
  }

  private initNote(){ // if the user has already rated the movie, return the note, else return 0
    if(this.myAccountService.userRatingMap.has(this.movie.recId)){
      return this.myAccountService.userRatingMap.get(this.movie.recId)
    }
    else{
      return 0
    }
  }
}
