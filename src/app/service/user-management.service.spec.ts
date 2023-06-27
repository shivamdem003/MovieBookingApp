import { TestBed } from '@angular/core/testing';

import { TicketappService } from './ticketapp.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';
import { of } from 'rxjs';
import { UserManagementService } from './user-management.service';
import { LoginComponent } from '../login/login.component';

describe('TicketappService', () => {
  let service: UserManagementService;
  let component:LoginComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[UserManagementService],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,

      ],providers:[UserManagementService,LoginComponent,]
    });
    service = TestBed.inject(UserManagementService);
    component=TestBed.inject(LoginComponent);
  });
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should be created', () => {
      expect(component).toBeTruthy();
    });


  });


