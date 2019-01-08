import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepGoalAchievedComponent } from './sleep-goal-achieved.component';

describe('SleepGoalAchievedComponent', () => {
  let component: SleepGoalAchievedComponent;
  let fixture: ComponentFixture<SleepGoalAchievedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepGoalAchievedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepGoalAchievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
