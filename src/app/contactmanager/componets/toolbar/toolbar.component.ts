import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter()
  constructor(private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
  }
  openAddContactDialog():void{
    let dialogRef = this.dialog.open(NewContactDialogComponent,{
      width:'400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log('I was closed!',result);
      if(result){
        this.openSnackBar('Contact saved','Navigate').onAction().subscribe(() => {
          this.router.navigate(['/contactmanager',result.id]);
        })
      }
    })
  }

  openSnackBar(message: string, action: string):MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration:5000
    });
  }
}
