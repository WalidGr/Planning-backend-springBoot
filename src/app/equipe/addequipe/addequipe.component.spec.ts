import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddequipeComponent } from './addequipe.component';

describe('AddequipeComponent', () => {
  let component: AddequipeComponent;
  let fixture: ComponentFixture<AddequipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddequipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
