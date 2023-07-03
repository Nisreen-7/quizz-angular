import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { ApiExampleComponent } from './api-example/api-example.component';

const routes: Routes = [
  { path: 'quizz', component: QuizzComponent },
  { path: 'api-example', component: ApiExampleComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
