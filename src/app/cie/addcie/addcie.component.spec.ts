import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcieComponent } from './addcie.component';

describe('AddcieComponent', () => {
  let component: AddcieComponent;
  let fixture: ComponentFixture<AddcieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
