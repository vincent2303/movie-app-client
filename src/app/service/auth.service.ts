import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../class/user';
import { env } from '../env/env';


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
    this.getToken()
  }

  public localStorage

  // handle token
  public saveToken(token){
    this.localStorage = localStorage.setItem('token', token);
  }

  public getToken(){
    this.localStorage = localStorage.getItem('token')
  }

  public logout(){
    localStorage.removeItem('token')
    this.localStorage = null
  }

  public getUserByToken(): Observable<User>{
    return this.httpClient.get<User>(env.url_api + "/getUserByToken", {headers: {Authorization: 'Bearer '+ this.localStorage}})
  }

  public getUserWithPassword(loginData): Observable<{user: User, token: String}>{
    return this.httpClient.post<{user: User, token: String}>(env.url_api + "/getUserWithPassword", loginData)
  }

}
