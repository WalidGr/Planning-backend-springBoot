import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddligneComponent } from './addligne.component';

describe('AddligneComponent', () => {
  let component: AddligneComponent;
  let fixture: ComponentFixture<AddligneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddligneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
