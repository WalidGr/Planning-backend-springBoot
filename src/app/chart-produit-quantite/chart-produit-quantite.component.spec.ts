import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProduitQuantiteComponent } from './chart-produit-quantite.component';

describe('ChartProduitQuantiteComponent', () => {
  let component: ChartProduitQuantiteComponent;
  let fixture: ComponentFixture<ChartProduitQuantiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartProduitQuantiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartProduitQuantiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
