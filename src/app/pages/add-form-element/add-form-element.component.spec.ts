import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormElementComponent } from './add-form-element.component';

describe('AddFormElementComponent', () => {
  let component: AddFormElementComponent;
  let fixture: ComponentFixture<AddFormElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFormElementComponent]
    });
    fixture = TestBed.createComponent(AddFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
