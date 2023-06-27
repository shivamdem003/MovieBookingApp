import { Component } from '@angular/core';
import { Movie } from '../model/Movie';
import { Ticket } from '../model/Ticket';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {

  constructor(){
    this.movieObject=JSON.parse(localStorage.getItem('movieObject')|| '{}');
    this.seatCount=JSON.parse(localStorage.getItem('seatCount')|| '{}');
  }

  movieObject:Movie=JSON.parse(localStorage.getItem('movieObject')|| '{}');
  seatCount:Ticket|any;

}
