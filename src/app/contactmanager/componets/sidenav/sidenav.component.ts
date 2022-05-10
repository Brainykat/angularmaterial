import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT= 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall = false;
  constructor(private breakPointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakPointObserver
    //.observe([Breakpoints.Small])
    .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state:BreakpointState) => {
      this.isScreenSmall = state.matches;
    })
  }

}
