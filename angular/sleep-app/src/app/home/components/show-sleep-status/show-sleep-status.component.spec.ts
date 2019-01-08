import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSleepStatusComponent } from './show-sleep-status.component';

describe('ShowSleepStatusComponent', () => {
  let component: ShowSleepStatusComponent;
  let fixture: ComponentFixture<ShowSleepStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSleepStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSleepStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
