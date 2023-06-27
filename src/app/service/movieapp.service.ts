import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieappService {

  constructor(private http:HttpClient) { }


  url_fetchAll='http://localhost:8082/api/v1.0/moviebooking/all';
  url_addMovie='http://localhost:8082/api/v1.0/moviebooking/addMovie';
  url_updateMovie="http://localhost:8082/api/v1.0/moviebooking/updateMovie";
  url_deleteMovie='http://localhost:8082/api/v1.0/moviebooking/delete';
  url_findById="http://localhost:8082/api/v1.0/moviebooking/movies/search/1";


  getAllMovie(): Observable<Movie[]> {
    let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`)
    return this.http.get<Movie[]>(this.url_fetchAll,{headers});
  }

  addMovie(movie:Movie):Observable<Movie>{

    let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`);
    return this.http.post<Movie>(this.url_addMovie,movie,{headers});
  }

  deleteMovie(id:number):Observable<any>{

    let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`);
    return this.http.delete<any>(`${this.url_deleteMovie}/${id}`,{headers});
  }

  updateMovie(movie:Movie):Observable<Movie>{

    let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`)
    return this.http.put<Movie>(this.url_updateMovie,movie,{headers});
  }

  findMovieById(mid:number):Observable<any>{
    let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`)
    return this.http.get<any>(`${this.url_findById}/${mid}`,{headers});
  }

}


