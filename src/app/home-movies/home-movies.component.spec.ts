// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { Movie } from "../model/Movie";
// import { HomeMoviesComponent } from "./home-movies.component";
// import { MovieappService } from '../service/movieapp.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { HttpClient } from '@angular/common/http';


// fdescribe('HomeMoviesComponent', () => {
//   let MOVIES: Movie[];
//   let component: HomeMoviesComponent;
//   let fixture: ComponentFixture<HomeMoviesComponent>;
//   let httpClient:HttpClient;
//   let service:MovieappService;


//   beforeEach(() => {
//     MOVIES = [
//       {
//         movieId: 1,
//         date: undefined,
//         movieName: 'Pokemon',
//         theaterName: 'PVR',
//         seatCount: 100
//       },
//       {
//         movieId: 2,
//         date: undefined,
//         movieName: 'Pokemon2',
//         theaterName: 'INOX',
//         seatCount: 100
//       }
//     ];
//     // mockMovieService = jasmine.createSpyObj('MovieappService', ['getAllMovies', 'addMovie', 'deleteMovie']);

//     TestBed.configureTestingModule({
//       declarations: [HomeMoviesComponent],
//       imports: [HttpClientTestingModule],
//       // providers: [MovieappService]

//     });

//     httpClient=TestBed.inject(HttpClient)
//     service=TestBed.inject(MovieappService)

//     // fixture=TestBed.createComponent(HomeMoviesComponent);
//     // component=fixture.componentInstance;
//     // fixture.detectChanges();

//     // it('service working',()=>{
//     //   expect(service.getAllMovie()).toBeNull;
//     // });

//   });

//   describe('delete', () => {


//     it('should delete the selected movie', () => {
//     });

//     it('should create', () => {
//       expect(component).toBeTruthy();
//     });

//   });
// });
