import { TestBed } from '@angular/core/testing';
import { MovieappService } from './movieapp.service';
import { HomeMoviesComponent } from '../home-movies/home-movies.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Movie } from '../model/Movie';

fdescribe('MovieappService', () => {
  let service: MovieappService;
  let component: HomeMoviesComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMoviesComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatDialogModule
      ],
      providers: [MovieappService, HomeMoviesComponent, MatDialog]
    });

    const validToken = 'your-valid-token';
    localStorage.setItem('user', JSON.stringify({ mapObj: { token: validToken } }));

    service = TestBed.inject(MovieappService);
    component = TestBed.inject(HomeMoviesComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('should be created component', () => {
    expect(component).toBeTruthy();
  });

  it('delete service testing', () => {
    const movieId = 123;
    const expectedResponse = {};

    service.deleteMovie(movieId).subscribe(response => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpTestingController.expectOne(`http://localhost:8082/api/v1.0/moviebooking/delete/${movieId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(expectedResponse);
  });


  it('should make a PUT request to update a movie', () => {
    const movie: Movie = {
      movieId: 1,
      movieName: 'moviename',
      theaterName: 'theater 1',
      seatCount: 120,
      date: undefined
    };

    const expectedResponse: Movie = {
      movieId: 1,
      movieName: 'moviename',
      theaterName: 'theater 1',
      seatCount: 120,
      date: undefined
    };

    service.updateMovie(movie).subscribe(response => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpTestingController.expectOne('http://localhost:8082/api/v1.0/moviebooking/updateMovie');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(movie);
    req.flush(expectedResponse);
  });


  it('should add a new movie', () => {
    const mockMovie: Movie = {
      movieId: 1,
      movieName: 'moviename',
      theaterName: 'theater 1',
      seatCount: 120,
      date: undefined
    };

    service.addMovie(mockMovie).subscribe(movie => {
      expect(movie).toEqual(mockMovie);
    });

    const req = httpTestingController.expectOne('http://localhost:8082/api/v1.0/moviebooking/addMovie');
    expect(req.request.method).toBe('POST');
    req.flush(mockMovie);
  });

  it('should retrieve all movies', () => {
    const mockMovies: Movie[] = [];

    service.getAllMovie().subscribe(movies => {
      expect(movies).toEqual(mockMovies);
    });

    const req = httpTestingController.expectOne('http://localhost:8082/api/v1.0/moviebooking/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);
  });


});
