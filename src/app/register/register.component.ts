import { Component } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';
import { User } from '../model/User';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userRegistrationDetails:User ={
    username: '',
    password: '',
    id: undefined,
    userRole: 'user',
    email: '',
    firstName:'',
    lastName:'',
    contactNumber:0 ,
    // securityQuestion : new Map<string,string>()
    securityQuestion:{"": ""}

  };

  question:string='';
  answer:string='';


  constructor(private userService:UserManagementService,private route:Router){ }

  public registerUser(data:User){

    this.userRegistrationDetails.securityQuestion={
      'favorite movie of all time':this.answer,
    }

    let resp=this.userService.registeruser(this.userRegistrationDetails);
    resp.subscribe(data=>{
      console.log(this.userRegistrationDetails)
      console.log("Id:" + data.id + "Registered");
      alert('Registered Succesfully!!')
      this.route.navigate(['login'])
    },error=>{
      console.log(error);
      console.log("Not Registered!!")
    }
    );

  }

}
