import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private route:Router){}


  public clearToken(){
    console.log(localStorage.getItem('token'));
    localStorage.clear();
    this.route.navigate(['login']);
    window.alert("you have logged out")
  }

  goToLogIn(){
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
