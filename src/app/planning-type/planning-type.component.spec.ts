import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningTypeComponent } from './planning-type.component';

describe('PlanningTypeComponent', () => {
  let component: PlanningTypeComponent;
  let fixture: ComponentFixture<PlanningTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
