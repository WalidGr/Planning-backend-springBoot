import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockMagasinComponent } from './addstock-magasin.component';

describe('AddstockMagasinComponent', () => {
  let component: AddstockMagasinComponent;
  let fixture: ComponentFixture<AddstockMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
