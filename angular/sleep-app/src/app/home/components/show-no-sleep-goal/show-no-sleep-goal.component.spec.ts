import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNoSleepGoalComponent } from './show-no-sleep-goal.component';

describe('ShowNoSleepGoalComponent', () => {
  let component: ShowNoSleepGoalComponent;
  let fixture: ComponentFixture<ShowNoSleepGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNoSleepGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNoSleepGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
