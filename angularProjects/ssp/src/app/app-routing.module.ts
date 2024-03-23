import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogintemplateComponent } from './logintemplate/logintemplate.component';
import { LoginreactiveComponent } from './loginreactive/loginreactive.component';
import { InnerComponent } from './inner/inner.component';
import { CounterComponent } from './ngrxcomponent/counter/counter.component';
import { PostsListComponent } from './ngrxcomponent/posts/posts-list/posts-list.component';

const routes: Routes = [
  { path: 'login', component: LogintemplateComponent },
  { path: 'login2', component: LoginreactiveComponent },
  {
    path: 'nested',
    children: [
      { path: 'grandchild', component: InnerComponent },
      { path: 'ngrx', component: CounterComponent },
      { path: 'post', component: PostsListComponent },
    ],
  },
  {
    path: 'parent',
    loadChildren: () =>
      import('./organization/organization.module').then(
        (m) => m.OrganizationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
