import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GithubService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubService {

  constructor(public http: Http) {
    console.log('Hello GithubService Provider');

  }

  public getUsers(): Observable<any>{
    return this.http.get("https://api.github.com/users")
    .map(response  => response.json());
  }

  public getUserByLoginName(name:string){
    return this.http.get("https://api.github.com/search/users?q=" + name + "+in:login")
    .map(response  => response.json());
  }

  public getUserDetails(url:string){
    return this.http.get(url)
    .map(response  => response.json());
  }

  public getAllRepos(url:string){
    return this.http.get(url)
    .map(response  => response.json());
  }

}
