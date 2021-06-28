import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLigneComponent } from './chart-ligne.component';

describe('ChartLigneComponent', () => {
  let component: ChartLigneComponent;
  let fixture: ComponentFixture<ChartLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
