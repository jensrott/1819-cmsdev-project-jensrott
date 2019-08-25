import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsEmptyAnswersComponent } from './tips-empty-answers.component';

describe('TipsEmptyAnswersComponent', () => {
  let component: TipsEmptyAnswersComponent;
  let fixture: ComponentFixture<TipsEmptyAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsEmptyAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsEmptyAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
