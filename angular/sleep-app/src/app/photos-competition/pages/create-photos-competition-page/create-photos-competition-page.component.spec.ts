import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhotosCompetitionPageComponent } from './create-photos-competition-page.component';

describe('CreatePhotosCompetitionPageComponent', () => {
  let component: CreatePhotosCompetitionPageComponent;
  let fixture: ComponentFixture<CreatePhotosCompetitionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePhotosCompetitionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePhotosCompetitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
