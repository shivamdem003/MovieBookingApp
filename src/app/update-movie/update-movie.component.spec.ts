import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMovieComponent } from './update-movie.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieappService } from '../service/movieapp.service';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../model/Movie';

fdescribe('UpdateMovieComponent', () => {
  let component: UpdateMovieComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMovieComponent],
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [MovieappService,UpdateMovieComponent]
    });

    const validToken = 'your-valid-token';
    localStorage.setItem('user', JSON.stringify({ mapObj: { token: validToken } }));
    component = TestBed.inject(UpdateMovieComponent);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the movie successfully', () => {
    component.movieUpdateMessage='Movie was updated';
    // Set up test data
    const movie = {
      movieId: 1,
      movieName: 'Movie Name',
      theaterName: 'Theater Name',
      seatCount: 100,
      date: undefined
    };

    // Set the updateMovieVariable
    component.updateMovieVariable = movie;

    // Call the updateMovie method
    component.updateMovie();

    // Expectations
    expect(component.movieUpdateMessage).toBe('Movie was updated');
  });

  it('should handle error when updating the movie', () => {
    // Set up test data
    const movie = {
      movieId: 1,
      movieName: 'Movie Name',
      theaterName: 'Theater Name',
      seatCount: 100,
      date: undefined
    };


    // Set the updateMovieVariable
    component.updateMovieVariable = movie;

    // Call the updateMovie method
    component.updateMovie();

    // Expectations
    expect(component.movieUpdateMessage).toBe(undefined);
  });


});
