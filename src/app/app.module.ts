import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HomeMoviesComponent } from './home-movies/home-movies.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { AuthGuard } from './service/auth.guard';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Nav2Component } from './nav2/nav2.component';
import { AboutComponent } from './about/about.component';
import { ReceiptComponent } from './receipt/receipt.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeMoviesComponent,
    TicketBookingComponent,
    NavComponent,
    Nav2Component,
    AboutComponent,
    ReceiptComponent,
    UpdateMovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule,MatInputModule,MatListModule,MatMenuModule,MatPaginatorModule,MatSidenavModule,MatToolbarModule,
    MatSortModule, MatTableModule,ReactiveFormsModule,AppRoutingModule,BrowserAnimationsModule,MatDialogModule,
  ],
  providers: [AuthGuard,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
