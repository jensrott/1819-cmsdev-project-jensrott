import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCompetitionPageComponent } from './photos-competition-page.component';

describe('PhotosCompetitionPageComponent', () => {
  let component: PhotosCompetitionPageComponent;
  let fixture: ComponentFixture<PhotosCompetitionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosCompetitionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosCompetitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
