import { Component, EventEmitter, ModuleWithComponentFactories, Output } from '@angular/core';
import { MovieappService } from '../service/movieapp.service';
import { UserManagementService } from '../service/user-management.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
import { User } from '../model/User';
import { BlogPost } from '../model/BlogPost';
import { MatDialog } from '@angular/material/dialog';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent implements OnInit {


  constructor(private movieapp:MovieappService,private router:Router,private dialog: MatDialog ){}

  ngOnInit(): void {
    this.getAllMovies();
  }

  data:{}|any;
  movieObj:Movie = new Movie;
  movieArr:Array<Movie>=[];
  public dataSource:[]|any;

  userObj:User |any;

  userRole:string=JSON.parse(localStorage.getItem('user')|| '{}').userRole ;

  getAllMovies(){
    this.movieapp.getAllMovie().subscribe(
      data=>{
        this.movieArr=Object.values(data);
        console.log("Movie Details Accessed");
        console.log(data);
        this.dataSource=this.movieArr;
      },error=>{
        console.log(error);
      }
    )}

    addMoviesErrorMessage:string='';

    addMovie(){
      this.movieapp.addMovie(this.movieObj).subscribe(
        data=>{
          this.data=JSON.stringify(data);
          this.movieArr.push(this.data);
          window.alert("Movie Added")
          window.location.reload();

        },error=>{
          console.log(error + "Movie not added")
          this.addMoviesErrorMessage='Movie could not be added';
        }
      )}

    deleteMovie(mid:number){
      this.movieapp.deleteMovie(mid).subscribe(
        data=>{
          let movieIndex = this.movieArr.findIndex(e=>e.movieId==mid);
          this.movieArr.splice(movieIndex,1);
          alert("Movie record deleted");
          window.location.reload();
          this.getAllMovies();
        },error=>{
          console.log(error);
        }
      )}


      movieId:number|any;
      moviesAvailable:string='AVAILABLE MOVIES';

      passMovieValue(movie:Movie){
        localStorage.setItem('movieObject',JSON.stringify(movie));
        console.log(JSON.parse(localStorage.getItem('movieObject')|| '{}'));
      }

      openFormDialog(movieId:number): void {
        const dialogRef = this.dialog.open(UpdateMovieComponent, {
          width: '350px' // Adjust the width as needed

        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          // Handle any actions after the dialog is closed
        });
      }


}
