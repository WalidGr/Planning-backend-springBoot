import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddagendaComponent } from './addagenda.component';

describe('AddagendaComponent', () => {
  let component: AddagendaComponent;
  let fixture: ComponentFixture<AddagendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddagendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddagendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
