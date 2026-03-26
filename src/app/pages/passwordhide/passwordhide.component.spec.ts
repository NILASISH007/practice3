import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordhideComponent } from './passwordhide.component';

describe('PasswordhideComponent', () => {
  let component: PasswordhideComponent;
  let fixture: ComponentFixture<PasswordhideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordhideComponent]
    });
    fixture = TestBed.createComponent(PasswordhideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
