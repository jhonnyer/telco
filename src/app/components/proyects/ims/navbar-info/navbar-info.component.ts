import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-info',
  templateUrl: './navbar-info.component.html',
  styleUrls: ['./navbar-info.component.css']
})
export class NavbarInfoComponent implements OnInit {
  user:User[]= [];
  token:string;
  constructor( private _users: UsersService, private router: Router ) { 
    this._users.userActive = this._users.getCurrentUser();
    this.token=this._users.getToken();
  }
  
  ngOnInit() {
    this.user = this._users.getCurrentUser();
  }
  
  logOut(){

    this._users.logOutUser( );
    this.router.navigate(["/home"]);
  }

  updateDataUser(){
    this.user = this._users.getCurrentUser();
  }

}
