import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbleformComponent } from './disbleform.component';

describe('DisbleformComponent', () => {
  let component: DisbleformComponent;
  let fixture: ComponentFixture<DisbleformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisbleformComponent]
    });
    fixture = TestBed.createComponent(DisbleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
