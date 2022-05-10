import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter()
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openAddContactDialog():void{
    let dialogRef = this.dialog.open(NewContactDialogComponent,{
      width:'400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('I was closed!',result);
    })
  }
}
