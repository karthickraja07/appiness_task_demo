import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { UsersService } from './services/users.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
