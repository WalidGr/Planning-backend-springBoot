import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplanningComponent } from './addplanning.component';

describe('AddplanningComponent', () => {
  let component: AddplanningComponent;
  let fixture: ComponentFixture<AddplanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
