import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { Nav2Component } from './nav2.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserManagementService } from '../service/user-management.service';
import { of } from 'rxjs';
import { User } from '../model/User';

describe('Nav2Component', () => {
  let component: Nav2Component;
  let fixture: ComponentFixture<Nav2Component>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nav2Component],
      imports: [HttpClientTestingModule],
      // providers: [UserManagementService]

    });
    fixture = TestBed.createComponent(Nav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
