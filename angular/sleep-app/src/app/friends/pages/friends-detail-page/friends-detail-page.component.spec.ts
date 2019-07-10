import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsDetailPageComponent } from './friends-detail-page.component';

describe('FriendsDetailPageComponent', () => {
  let component: FriendsDetailPageComponent;
  let fixture: ComponentFixture<FriendsDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
