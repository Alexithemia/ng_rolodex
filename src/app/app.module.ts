import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateContactComponent } from './pages/createContact/createContact.component';
import { AllContactsComponent } from './pages/allContacts/allContacts.component';
import { EditContactComponent } from './pages/editContact/editContact.component';
import { DeleteContactComponent } from './pages/deleteContact/deleteContact.component';

import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AllContactsComponent,
    CreateContactComponent,
    EditContactComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
