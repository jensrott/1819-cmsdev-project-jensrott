import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesDetailPageComponent } from './memes-detail-page.component';

describe('MemesDetailPageComponent', () => {
  let component: MemesDetailPageComponent;
  let fixture: ComponentFixture<MemesDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemesDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
