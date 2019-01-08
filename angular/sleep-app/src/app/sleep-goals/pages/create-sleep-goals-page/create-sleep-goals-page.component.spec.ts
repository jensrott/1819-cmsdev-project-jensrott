import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSleepGoalsPageComponent } from './create-sleep-goals-page.component';

describe('SleepGoalsPageComponent', () => {
  let component: CreateSleepGoalsPageComponent;
  let fixture: ComponentFixture<CreateSleepGoalsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSleepGoalsPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSleepGoalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
