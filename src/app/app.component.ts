import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

import {  Users} from './classes/user';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( private userService: UsersService){

  }

  isUsers:Users[];
  term;
  selectedUser: Users;  



  ngOnInit(){

//  user details display function
    this.userService.getUserdetails().subscribe(
      data =>{
        this.isUsers = data;
      }
    )
  }


  //  select time user detail display function
  onSelect(user_detail: Users): void {
    this.selectedUser = user_detail;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedUser)}`);
    // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
}
}
   