import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsToolsDetailPageComponent } from './tips-tools-detail-page.component';

describe('TipsToolsDetailPageComponent', () => {
  let component: TipsToolsDetailPageComponent;
  let fixture: ComponentFixture<TipsToolsDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsToolsDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsToolsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
