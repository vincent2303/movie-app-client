import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../class/movie';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  @Input() private movie: Movie

  constructor() { }

  ngOnInit() {
  }

}
