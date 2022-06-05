import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieslistResolver } from './movielist-resolve.services';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movieslist/movieslist.module').then(m => m.MovieslistModule), //resolve: {movieca: MovieslistResolver}
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LogintModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
