import { TestBed } from '@angular/core/testing';

import { TicketappService } from './ticketapp.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';
import { of } from 'rxjs';

fdescribe('TicketappService', () => {
  let service: TicketappService;
  let component:TicketBookingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[TicketBookingComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],providers:[TicketappService,TicketBookingComponent]
    });
    service = TestBed.inject(TicketappService);
    component=TestBed.inject(TicketBookingComponent);
  });
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should call get() from service',()=>{
      let response:any;
      let spy=spyOn(service,'getAllTickets').and.returnValue(of(response))
      expect(component.getAllTciketss()).toEqual(response)

    });

    it('should call post() from service',()=>{
      let response:any;
      let spy=spyOn(service,'buyTicket').and.returnValue(of(response))
    })

  });


