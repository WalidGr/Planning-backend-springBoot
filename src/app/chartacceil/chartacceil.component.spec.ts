import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartacceilComponent } from './chartacceil.component';

describe('ChartacceilComponent', () => {
  let component: ChartacceilComponent;
  let fixture: ComponentFixture<ChartacceilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartacceilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartacceilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
