import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {ListUsersComponent} from './list-users/list-users.component';

const routes: Routes = [
  {path: 'details' , component: DetailsComponent},
  {path: '' , component: ListUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
