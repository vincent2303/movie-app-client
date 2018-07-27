import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../class/movie';
import { Observable } from 'rxjs/Observable';
import { env } from '../env/env';
import { ResearchRequest } from '../class/researchRequest';


@Injectable()
export class MyAccountService {

  public movieFinded: Movie[] = []

  constructor(
    private httpClient: HttpClient
  ) {}

  public researchMovie(researchRequest: ResearchRequest){
    this.httpClient.post<Movie[]>(env.url_api + "/movies", researchRequest).subscribe(movieList=>{
      this.movieFinded = movieList
    })
  }

}

