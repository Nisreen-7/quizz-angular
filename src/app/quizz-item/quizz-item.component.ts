import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quizz } from '../entities';

@Component({
  selector: 'app-quizz-item',
  templateUrl: './quizz-item.component.html',
  styleUrls: ['./quizz-item.component.css']
})
export class QuizzItemComponent {
  status = '';
  @Output()
  goodAnswer = new EventEmitter();
  @Output()
  choose = new EventEmitter();

  @Input({required: true})
  quizz:Quizz;

  chooseAnswer(index: number) {
    if (this.status == '') {
      if (index === this.quizz.answer) {
        this.status = 'good';
        this.goodAnswer.emit();
      } else {
        this.status = 'bad';
      }

    }
  }
  next() {
    this.choose.emit();
  }
}
