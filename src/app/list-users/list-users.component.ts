import { Component, OnInit } from '@angular/core';
import {User} from '../modele/user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: Array<User>;
  constructor(private userService: UserService, private route: Router) {
    this.users = new Array<User>();
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  getDetails(id: number){
    this.route.navigate(['details']);
  }
}
