import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , filter, pipe } from 'rxjs';
import { User } from './user';
// pipe : pipe sur les observables
import {  of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {

  }
  
  isAuthenticated: boolean = !!localStorage.getItem("token");


  getUser(login:string,password:string):Observable<User[]>
  {
    let params = new HttpParams().set("login",login)
                                 .set("password",password)
    return this.httpClient.get<User[]>('http://localhost:3000/users',{params})
      // Le HTTPClieent retourne toujours un observable de type user ( interface user )
      // return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
      //   map(users=>users.filter(user=>user.login===login&&user.password===password))
      // )
      // HttpParams est utilisé lorsque on a des param dans notre requete Http

  }
}
