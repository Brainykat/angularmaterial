import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT= 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall = false;

  users: Observable<User[]> | undefined;

  constructor(private breakPointObserver: BreakpointObserver,
    private userService: UserService,
    private router:Router) { }
  
  ngOnInit(): void {
    this.breakPointObserver
    //.observe([Breakpoints.Small])
    .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state:BreakpointState) => {
      this.isScreenSmall = state.matches;
    });

    this.users = this.userService.Users;
    this.userService.loadAll();
    this.userService.Users.subscribe( data => {
        //console.log(data);
        if(data.length > 0) this.router.navigate(['/contactmanager', data[0].id]);
      });
  }

}
