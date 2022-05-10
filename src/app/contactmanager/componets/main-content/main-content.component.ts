import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User | undefined;
  constructor(private activatedRoute: ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.userService.Users.subscribe(users => {
        if(users.length == 0) return;
        this.user = this.userService.getUserById(id);
      })
      
    })
  }

}
