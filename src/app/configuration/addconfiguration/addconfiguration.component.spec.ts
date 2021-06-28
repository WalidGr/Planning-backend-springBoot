import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconfigurationComponent } from './addconfiguration.component';

describe('AddconfigurationComponent', () => {
  let component: AddconfigurationComponent;
  let fixture: ComponentFixture<AddconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
