import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../../service/my-account.service';
import { Movie } from '../../../class/movie';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.css']
})
export class MovieFinderComponent implements OnInit {

  constructor(public myAccountService:MyAccountService) { }
  
  ngOnInit() {
  }
}
