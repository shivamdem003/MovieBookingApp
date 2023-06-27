import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { ForgotPassword } from '../model/ForgotPassword';


@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  url_login='http://localhost:8084/api/v1.0/moviebooking/login';
  url_register='http://localhost:8084/api/v1.0/moviebooking/register';
  url_forgot_password="http://localhost:8084/api/v1.0/moviebooking/forget";
  url_getAllUsers="http://localhost:8084/api2/v1.0/getAllUsers";


  constructor(private http:HttpClient) { }

  public loginUser(userDetails:User):Observable<any>{

    return this.http.post<loginResponse>(this.url_login,userDetails);
  }

  public registeruser(userDetails:User):Observable<any>{
    return this.http.post<User>(this.url_register,userDetails);
  }

  getAllUser():Observable<User[]>{
    let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`);
    return this.http.get<User[]>(this.url_getAllUsers,{headers});
  }

  public resetPassword(forgotPassword:ForgotPassword):Observable<any>{
    return this.http.post<ForgotPassword>(this.url_forgot_password,forgotPassword);
  }
}

interface loginResponse{
  Message:string
  Token:string
}





