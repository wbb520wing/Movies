import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css'],
})
export class MovieslistComponent implements OnInit {
  moviesCard$: any;
  baseImageUrl = 'http://image.tmdb.org/t/p/w185';
  isScroll = false;

  constructor(
    private movieCardService: MovieApiService,
    private route: Router,
    private routeR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieCardService.getMovieCards();
    this.moviesCard$ = this.movieCardService.moviecards$
    // this.moviesCard$ = this.routeR.snapshot.data['movieca'];
  }

  onSelect(card: any) {
    this.route.navigate(['/movies', card.id]);
  }

  onScroll() {
    this.isScroll = true;
    this.movieCardService.scrollDown();
  }
}
