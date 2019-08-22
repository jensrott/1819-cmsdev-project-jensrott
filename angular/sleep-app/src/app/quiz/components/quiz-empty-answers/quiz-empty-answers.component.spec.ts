import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEmptyAnswersComponent } from './quiz-empty-answers.component';

describe('QuizEmptyAnswersComponent', () => {
  let component: QuizEmptyAnswersComponent;
  let fixture: ComponentFixture<QuizEmptyAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizEmptyAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEmptyAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
