import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeMoviesComponent } from './home-movies/home-movies.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './service/auth.guard';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:HomeMoviesComponent,
    canActivate: [AuthGuard],
    path:'movies'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:TicketBookingComponent,
    canActivate: [AuthGuard],
    path:'bookTicket'
  },{
    component:ForgotPasswordComponent,
    path:'forgetPassword'
  },
  {
    component:ReceiptComponent,
    path:'receipt'
  },
  {
    component:UpdateMovieComponent,
    path:'update'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
