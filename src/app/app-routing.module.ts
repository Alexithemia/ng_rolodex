import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateContactComponent } from './pages/createContact/createContact.component';
import { AllContactsComponent } from './pages/allContacts/allContacts.component';
import { EditContactComponent } from './pages/editContact/editContact.component';
import { DeleteContactComponent } from './pages/deleteContact/deleteContact.component';

import { AccessGuard } from './services/accessGuard.service'

const routes: Routes = [
  { path: '', canActivate: [AccessGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', canActivate: [AccessGuard], component: ProfileComponent },
  { path: 'createContact', canActivate: [AccessGuard], component: CreateContactComponent },
  { path: 'allContacts', canActivate: [AccessGuard], component: AllContactsComponent },
  { path: 'editContact', canActivate: [AccessGuard], component: EditContactComponent },
  { path: 'deleteContact', canActivate: [AccessGuard], component: DeleteContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
