import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartplanningComponent } from './chartplanning.component';

describe('ChartplanningComponent', () => {
  let component: ChartplanningComponent;
  let fixture: ComponentFixture<ChartplanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartplanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
