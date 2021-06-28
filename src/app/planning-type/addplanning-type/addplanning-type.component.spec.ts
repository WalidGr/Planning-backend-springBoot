import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplanningTypeComponent } from './addplanning-type.component';

describe('AddplanningTypeComponent', () => {
  let component: AddplanningTypeComponent;
  let fixture: ComponentFixture<AddplanningTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplanningTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplanningTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
