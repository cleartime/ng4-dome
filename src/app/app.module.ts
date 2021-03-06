import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app/app.component';
import { TestComponent } from './test/test.component';


import { Service } from './service';


export const ROUTES: Routes = [
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }