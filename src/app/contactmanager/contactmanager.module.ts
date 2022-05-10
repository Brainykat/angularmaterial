import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './componets/toolbar/toolbar.component';
import { MainContentComponent } from './componets/main-content/main-content.component';
import { SidenavComponent } from './componets/sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './componets/notes/notes.component';
import { NewContactDialogComponent } from './componets/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  {
    path:'', 
    component: ContactmanagerAppComponent,
    children:[
        {path:':id',component:MainContentComponent},
        {path:'',component:MainContentComponent}
    ]
  },
    {path:'**',redirectTo:''}
  ];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent  
  ],
  providers:[
    UserService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
