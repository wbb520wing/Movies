import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { MovieApiService } from './services/movie-api.service';

@Injectable({
  providedIn: 'root',
})
export class MovieslistResolver implements Resolve<any> {
  constructor(private movieApiService: MovieApiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.movieApiService.getMovieCards().then((data: any) => {
      return data;
    });
  }
}
