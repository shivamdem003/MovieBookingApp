import { Component } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component {

  constructor(private userService:UserManagementService,private route:Router){}
  userLoginDetails:User={
    username: '',
    password: '',
    id: undefined,
    userRole: 'user',
    email: '',
    firstName:'',
    lastName:'',
    contactNumber:0,
    // securityQuestion : new Map<string,string>()
    securityQuestion:{"": ""}
  };

  answer:string='';
  usernameErrorMessage: string | undefined;
  passwordErrorMessage: string | undefined;
  userRoleErrorMessage: string | undefined;
  userErrorMessage: string | undefined;

  public login(data:User){
    this.usernameErrorMessage = '';
    this.passwordErrorMessage = '';
    this.userRoleErrorMessage = '';
    // console.log("touch");
    let resp=this.userService.loginUser(this.userLoginDetails);
    resp.subscribe(data=>{
      console.log("Token: " + JSON.stringify(data));
      localStorage.setItem('user',JSON.stringify(data));
      this.route.navigate(['movies'])
    },error=>{
      console.log(error);
      this.userErrorMessage='Failed to authenticate. Please try again.';
      // Set error messages based on the error response
      if (error.status === 401) {
        this.usernameErrorMessage = 'Invalid username';
        this.passwordErrorMessage = 'Invalid password';
      } else if (error.status === 403) {
        this.userRoleErrorMessage = 'Invalid user role';
      }
    });

  }

  showDropdown = false;

  loadDropdown() {
    this.showDropdown = true;
    // Additional code to load the dropdown options if needed
  }

}
