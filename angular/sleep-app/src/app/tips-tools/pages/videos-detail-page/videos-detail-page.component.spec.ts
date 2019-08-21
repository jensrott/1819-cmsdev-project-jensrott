import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDetailPageComponent } from './videos-detail-page.component';

describe('VideosDetailPageComponent', () => {
  let component: VideosDetailPageComponent;
  let fixture: ComponentFixture<VideosDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
