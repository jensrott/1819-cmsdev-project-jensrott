import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesPageComponent } from './memes-page.component';

describe('MemesPageComponent', () => {
  let component: MemesPageComponent;
  let fixture: ComponentFixture<MemesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
