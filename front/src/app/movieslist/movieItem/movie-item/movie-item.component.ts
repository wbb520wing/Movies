import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, tap, switchMap } from 'rxjs/operators';
import { MovieApiService } from 'src/app/services/movie-api.service'

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  movieid: any;
  videoKey = '';


  constructor(
    private route: ActivatedRoute,
    private movieCardService: MovieApiService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => (this.movieid = params['movieId'])))
      .subscribe((_) => {
        this.movieCardService
          .getVideoKey(this.movieid)
          .pipe(
            tap((data: any) => {
              const key = data.results[0].key;
              this.videoKey = key;
            })
          ).subscribe();
      });




    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);


  }
}
