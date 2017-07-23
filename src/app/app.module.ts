import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdButtonModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HashUserService, PRIVATE_KEY, PUBLIC_KEY } from './hash-user.service';
import { SuperHeroService } from './superHero.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdGridListModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: PRIVATE_KEY, useValue: '395b3c0f7c50cc9dac1f1d0368c1d8bda83931bf'},
    { provide: PUBLIC_KEY, useValue: '41bb31ed36d07454e7efc49bcfbc66b1' },
    HashUserService,
    SuperHeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
