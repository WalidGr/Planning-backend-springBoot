import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplanchargementComponent } from './addplanchargement.component';

describe('AddplanchargementComponent', () => {
  let component: AddplanchargementComponent;
  let fixture: ComponentFixture<AddplanchargementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplanchargementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplanchargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
