import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private api = "http://localhost:4231/auth/signup"

  constructor(private http: HttpClient) { }

  postApi(){
    this.http.post<any>(this.api, {
      username: "string",
      password: "12345Dos",
      email: "email@email.com",
      role: "USER",
      tmdb_key: "stringstringstr"
    }).subscribe()
  }
}
