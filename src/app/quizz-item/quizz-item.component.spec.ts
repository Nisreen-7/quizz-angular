import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzItemComponent } from './quizz-item.component';

describe('QuizzItemComponent', () => {
  let component: QuizzItemComponent;
  let fixture: ComponentFixture<QuizzItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzItemComponent]
    });
    fixture = TestBed.createComponent(QuizzItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
