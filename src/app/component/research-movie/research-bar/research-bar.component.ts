import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../../service/my-account.service';
import { genres } from '../../../const/genres';
import { ResearchRequest } from '../../../class/researchRequest';

@Component({
  selector: 'app-research-bar',
  templateUrl: './research-bar.component.html',
  styleUrls: ['./research-bar.component.css']
})
export class ResearchBarComponent implements OnInit {

  private researchRequest:ResearchRequest = {
    title: "",
    genreFilter: "any",
    minAverage: 0,
    minRating: 0,
    skipedMovies: 0
  }
  private genres: String[] = genres

  constructor(private myAccountService:MyAccountService) { }

  ngOnInit() {

  }

  private find(){
    this.myAccountService.researchMovie(this.researchRequest);
  }

  private resetOptions(){
    this.researchRequest = {
      title: "",
      genreFilter: "any",
      minAverage: 0,
      minRating: 0,
      skipedMovies: 0
    }
  }
}
