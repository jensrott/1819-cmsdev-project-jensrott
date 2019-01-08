import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsToolsPageComponent } from './tips-tools-page.component';

describe('TipsToolsPageComponent', () => {
  let component: TipsToolsPageComponent;
  let fixture: ComponentFixture<TipsToolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsToolsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
