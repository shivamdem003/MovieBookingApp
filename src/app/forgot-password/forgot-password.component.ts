import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';
import { Router } from '@angular/router';
import { ForgotPassword } from '../model/ForgotPassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

  constructor(private userService:UserManagementService,private route:Router){}
  ngOnInit(): void {

  }

  forgotLoginDetails:ForgotPassword={
    username:'',
    password:'',
    confirmPassword:'',
    securityQuestion:{"": ""}
  }

  answer:string='';

  public resetPasswords(){

    this.forgotLoginDetails.securityQuestion={
      'favorite movie of all time':this.answer,
    }
    let resp=this.userService.resetPassword(this.forgotLoginDetails);
    resp.subscribe(data=>{
      console.log(data);
      this.route.navigate(['login'])
    },error=>{
      console.log(error);
    });
  }

  // getAllusers(){
  //   this.userService.getAllUser().subscribe(
  //     data=>{
  //       console.log(data);
  //     },error=>{
  //       console.log(error);
  //     }
  //   );
  // }

}
