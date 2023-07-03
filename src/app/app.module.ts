import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizzItemComponent } from './quizz-item/quizz-item.component';
import { ApiExampleComponent } from './api-example/api-example.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    QuizzItemComponent,
    ApiExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
