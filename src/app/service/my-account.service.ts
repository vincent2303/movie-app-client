import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../class/movie';
import { Observable } from 'rxjs/Observable';
import { env } from '../env/env';
import { ResearchRequest } from '../class/researchRequest';
import { User } from '../class/user';
import { AuthService } from './auth.service';
import { Rating } from '../class/rating';


@Injectable()
export class MyAccountService {

  public user: User
  public userRatingMap: Map<number, number> // recId --> user note
  public movieFindedTable: Movie[][] = []
  public movieLikeFinded: Movie[]

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.authService.getToken()
    if(this.authService.localStorage){
      this.authService.getUserByToken().subscribe(user=>{
        this.user = user
        this.userRatingMap = new Map()
        this.user.ratings.forEach(rating => {
          this.userRatingMap.set(rating[0], rating[1])
        });
      })
    }
  }

  public register(registerData){
    return this.httpClient.post(env.url_api + "/register", registerData)
  }

  public login(loginData){
    this.authService.getUserWithPassword(loginData).subscribe(res=>{
      this.user = res.user
      this.authService.saveToken(res.token)
    })
  }

  public logout(){
    this.authService.logout()
    this.user = null
  }

  public researchMovie(researchRequest: ResearchRequest){
    this.httpClient.post<Movie[]>(env.url_api + "/movies", researchRequest).subscribe(movies=>{
      this.movieFindedTable = []
      let movieNumber = movies.length
      for (let index = 0; index < movieNumber; index++) {
        let movie = movies[index]
        if (index%4==0) {
          this.movieFindedTable.push([movie])
        }
        else{
          let indexLastLine = this.movieFindedTable.length - 1
          this.movieFindedTable[indexLastLine].push(movie)
        }
      }
    })
  }

  public movieLike(title: String): Observable<Movie[]>{ // 5 most popular movies with argument title in their title
    return this.httpClient.get<Movie[]>(env.url_api + "/movieLike/:"+title)
  }

  public getMoviesWithRecId(recIdArray: number[]): Observable<Movie[]>{ // with an array of recId, gives the array of movie
    return this.httpClient.post<Movie[]>(env.url_api + "/getMoviesWithRecId", {recIdArray: recIdArray})
  }

  public userUpdate(update){ // update user when modification is given
    this.httpClient.put<User>(env.url_api+"/userUpdate", update, {headers: {Authorization: 'Bearer '+ this.authService.localStorage}}).subscribe((user)=>{
      this.user = user
    })
  }
  
  public movieRating(rating: Rating){ // when a user rates a movie, update his rating map and his rating (on the data base)
    this.userRatingMap.set(rating.movieRecId, rating.rating)
    this.userUpdate({ratings: Array.from(this.userRatingMap)})
  }
}