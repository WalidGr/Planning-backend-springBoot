import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMagasinComponent } from './stock-magasin.component';

describe('StockMagasinComponent', () => {
  let component: StockMagasinComponent;
  let fixture: ComponentFixture<StockMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
