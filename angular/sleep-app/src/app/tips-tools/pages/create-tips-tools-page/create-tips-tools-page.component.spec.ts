import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipsToolsPageComponent } from './create-tips-tools-page.component';

describe('CreateTipsToolsPageComponent', () => {
  let component: CreateTipsToolsPageComponent;
  let fixture: ComponentFixture<CreateTipsToolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTipsToolsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipsToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
