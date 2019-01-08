import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSleeperPageComponent } from './type-sleeper-page.component';

describe('TypeSleeperPageComponent', () => {
  let component: TypeSleeperPageComponent;
  let fixture: ComponentFixture<TypeSleeperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSleeperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSleeperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
