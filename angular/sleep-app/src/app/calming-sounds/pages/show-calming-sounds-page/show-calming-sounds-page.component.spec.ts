import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCalmingSoundsPageComponent } from './show-calming-sounds-page.component';

describe('ShowCalmingSoundsPageComponent', () => {
  let component: ShowCalmingSoundsPageComponent;
  let fixture: ComponentFixture<ShowCalmingSoundsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCalmingSoundsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCalmingSoundsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
