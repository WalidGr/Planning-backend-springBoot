import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProduittotComponent } from './chart-produittot.component';

describe('ChartProduittotComponent', () => {
  let component: ChartProduittotComponent;
  let fixture: ComponentFixture<ChartProduittotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartProduittotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartProduittotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
