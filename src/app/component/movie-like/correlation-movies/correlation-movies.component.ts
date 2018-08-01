import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../class/movie';
import { MyAccountService } from '../../../service/my-account.service';

@Component({
  selector: 'app-correlation-movies',
  templateUrl: './correlation-movies.component.html',
  styleUrls: ['./correlation-movies.component.css']
})
export class CorrelationMoviesComponent implements OnInit {

  @Input() private movie: Movie

  ngOnChanges() {
    let corrList = this.movie.corr
    let recIdList = []
    corrList.forEach(correlation => {
      recIdList.push(correlation.recId)
    })
    this.myAccountService.getMoviesWithRecId(recIdList).subscribe(movies=>{
      this.correlatedMovies = movies
    })
  }
  private correlatedMovies: Movie[]

  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {
  }

}
