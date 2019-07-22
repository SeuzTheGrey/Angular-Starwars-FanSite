import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './Components/people/people.component';
import { ItemComponent } from './Components/item/item.component';
import { HomeComponent } from './Components/home/home.component';
import { PersonComponent } from './Components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ItemComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    ItemComponent,
    PersonComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
