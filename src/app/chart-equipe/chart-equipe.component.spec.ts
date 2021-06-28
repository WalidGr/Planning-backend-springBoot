import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEquipeComponent } from './chart-equipe.component';

describe('ChartEquipeComponent', () => {
  let component: ChartEquipeComponent;
  let fixture: ComponentFixture<ChartEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
