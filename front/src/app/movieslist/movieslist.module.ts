
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MovieslistResolver } from "../movielist-resolve.services";
import { SpinnerComponent } from "../shared/spinner/spinner.component";



import { MovieItemComponent } from "./movieItem/movie-item/movie-item.component";
import { MovieslistRoutingModule } from "./movieslist-routing.module";
import { MovieslistComponent } from "./movieslist.component";



@NgModule({
  declarations: [
    MovieslistComponent,
    MovieItemComponent,
    SpinnerComponent,
  ],
  imports: [
    MovieslistRoutingModule,
    YouTubePlayerModule,
    CommonModule,
    InfiniteScrollModule,
  ],
  providers: [MovieslistResolver],
})
export class MovieslistModule {}
