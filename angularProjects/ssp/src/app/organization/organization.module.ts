import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  { path: 'child1', component: UserComponent },
  { path: 'child2', component: User2Component },
];

@NgModule({
  declarations: [
    UserComponent,
    User2Component,
    ParentComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ParentComponent, children: childRoutes }
    ]),
    CommonModule
  ]
})
export class OrganizationModule { }
