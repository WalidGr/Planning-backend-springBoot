import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanchargementComponent } from './planchargement.component';

describe('PlanchargementComponent', () => {
  let component: PlanchargementComponent;
  let fixture: ComponentFixture<PlanchargementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanchargementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanchargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
