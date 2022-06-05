import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { MovieApiService } from '../services/movie-api.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('all_movies', { static: true }) all_movies!: ElementRef;


  movieList: any;
  baseImageUrl = 'http://image.tmdb.org/t/p/w185';



  constructor( private movieApiService: MovieApiService, private http: HttpClient ) {}



  ngOnInit(): void {

    fromEvent(this.all_movies.nativeElement, 'keyup')
    .pipe(
      debounceTime(500),
      filter((_) => {
        const keyword = this.all_movies.nativeElement.value;
        return keyword.trim();
      }),
      tap((_) => {
        const keyword = this.all_movies.nativeElement.value.trim();
        this.movieApiService.searchMovies(keyword);
      })
    )
    .subscribe();


    this.movieList = this.movieApiService.movielist;
    console.log(this.movieList);

  }

}
