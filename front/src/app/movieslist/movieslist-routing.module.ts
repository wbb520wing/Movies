import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MovieslistComponent } from './movieslist.component';
import { MovieItemComponent } from './movieItem/movie-item/movie-item.component';

const routes: Routes = [
  {
    path: '',
    component: MovieslistComponent
  },
  {
    path: ':movieId',
    component: MovieItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieslistRoutingModule {}