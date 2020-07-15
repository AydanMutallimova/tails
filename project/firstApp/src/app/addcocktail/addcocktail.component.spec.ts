import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcocktailComponent } from './addcocktail.component';

describe('AddcocktailComponent', () => {
  let component: AddcocktailComponent;
  let fixture: ComponentFixture<AddcocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
