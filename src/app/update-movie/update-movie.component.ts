import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieappService } from '../service/movieapp.service';
import { Router } from '@angular/router';
import { Movie } from '../model/Movie';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {
  movie: any = localStorage.getItem('movieObject');

  updateMovieVariable: Movie = {
    movieId: undefined,
    date: undefined,
    movieName: '',
    theaterName: '',
    seatCount: 100
  };

  movieUpdateMessage: string | undefined; // Update the type of movieUpdateMessage

  constructor(private movieapp: MovieappService, private router: Router) {}

  updateMovie() {
    this.movieapp.updateMovie(this.updateMovieVariable).subscribe(
      (data) => {
        this.movieUpdateMessage = 'Movie was updated';
        window.alert('Movie updated');
        location.reload();
      },
      (error) => {
        console.log(error);
        this.movieUpdateMessage = 'Movie was not updated';
      }
    );
  }
}
