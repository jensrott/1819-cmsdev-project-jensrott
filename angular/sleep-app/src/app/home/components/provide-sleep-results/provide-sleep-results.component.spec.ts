import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideSleepResultsComponent } from './provide-sleep-results.component';

describe('CheckSleepGoalComponent', () => {
  let component: ProvideSleepResultsComponent;
  let fixture: ComponentFixture<ProvideSleepResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProvideSleepResultsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideSleepResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
