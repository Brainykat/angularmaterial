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

const routes: Routes = [
  {
    path:'', 
    component: ContactmanagerAppComponent,
    children:[
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
    SidenavComponent    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
