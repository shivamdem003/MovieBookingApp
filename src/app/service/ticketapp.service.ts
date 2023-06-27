import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketappService {

  constructor(private http:HttpClient) { }

   url_buyticket="http://localhost:8082/api/v1.0/moviebooking/book";
   url_getAllTicket="http://localhost:8082/api/v1.0/moviebooking/listAllTickets";

  public buyTicket(ticket:Ticket):Observable<string|any>{
    let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`);
    return this.http.post<Ticket>(this.url_buyticket,ticket,{headers});
  }

  getAllTickets():Observable<Ticket[]>{
    let headers=new HttpHeaders().set("Authorization",`Bearer ${JSON.parse(localStorage.getItem('user')|| '{}').mapObj.token}`);
    return this.http.get<Ticket[]>(this.url_getAllTicket,{headers});
  }



}
