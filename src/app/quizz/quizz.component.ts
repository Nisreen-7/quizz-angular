import { Component } from '@angular/core';
import { Quizz } from '../entities';
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  score = 0;
  current = 0;
  list: Quizz[] = [
    { question: 'Question 1', options: ['réponse 1', 'réponse 2'], answer: 0 },
    { question: 'Question 2', options: ['réponse 1', 'réponse 2', 'réponse 3'], answer: 1 },
    { question: 'Question 3', options: ['réponse 1', 'réponse 2', 'réponse 3'], answer: 0 },
    { question: 'Question 4', options: ['réponse 1', 'réponse 2', 'réponse 3', 'réponse 4'], answer: 2 },
  ]

  incrementScore() {
    this.score++;
  }

  nextQuestion() {
    this.current++;
  }

  reset() {
    this.score = 0;
    this.current = 0;
  }
}
