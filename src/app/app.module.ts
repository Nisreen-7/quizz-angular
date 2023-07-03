import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizzItemComponent } from './quizz-item/quizz-item.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    QuizzItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
