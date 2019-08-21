import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TipsDetailPageComponent } from "./tips-detail-page.component";

describe("TipsToolsDetailPageComponent", () => {
  let component: TipsDetailPageComponent;
  let fixture: ComponentFixture<TipsDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TipsDetailPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
