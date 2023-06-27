import { Component, Input, OnInit } from '@angular/core';
import { TicketappService } from '../service/ticketapp.service';
import { Ticket } from '../model/Ticket';
import { Router } from '@angular/router';
import { Movie } from '../model/Movie';
import { MovieappService } from '../service/movieapp.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit{


  constructor(private ticketService:TicketappService,private route:Router,private movieService:MovieappService){ }

  ngOnInit(): void {
    this.getAllTciketss();
    this.movie=JSON.parse(localStorage.getItem('movieObject')|| '{}');
    this.username=JSON.parse(localStorage.getItem('user')|| '{}').username;
    console.log(this.ticketObj.noOfSeatsBooked)

  }

  data:{}|any;
  ticketObj:Ticket = new Ticket;
  movie: Movie = new Movie;
  username:String='';
  ticketArr:Array<Ticket>=[];

  displayedColumns: string[] = ['transcationalId', 'movie_id_fk', 'customerName', 'movieName', 'theaterName', 'noOfSeatsBooked'];
  public dataSource:[]|any;

  userRole:string=JSON.parse(localStorage.getItem('user')|| '{}').userRole ;


 getAllTciketss(){
    this.ticketService.getAllTickets().subscribe(
      data=>{
        // this.ticketArr=Object.values(data);
        this.ticketArr=data;
        console.log("Ticket Found!!");
        this.dataSource=this.ticketArr;
      },error=>{
        console.log(error);
        this.ticketArr=Object.values(error)
        console.log('ticket not found')
      }
    )}


  public bookTicket(){
    this.ticketObj.movie_id_fk=this.movie.movieId;
    this.ticketObj.customerName=this.username;

    localStorage.setItem('seatCount',JSON.stringify(this.ticketObj));
    this.ticketService.buyTicket(this.ticketObj).subscribe(
      data=>{
        this.route.navigate(['/movies'])
        console.log("Ticket booked!!");
        this.route.navigate(['/receipt']);
        localStorage.removeItem('movieObject');
      }
      ,error=>{
        console.log(error ,"Unable to book ticket");
        console.warn("Ticket Not Booked!!");

      }
    )}

      public getCurrentMovieDetails(){

        console.log(localStorage.getItem('movieObject'));
      }

      public clearTicketDetails(){
        localStorage.removeItem('movieObject');
        window.location.reload();
      }

}
