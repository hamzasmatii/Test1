import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstudentComponent } from './showstudent.component';

describe('ShowstudentComponent', () => {
  let component: ShowstudentComponent;
  let fixture: ComponentFixture<ShowstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowstudentComponent]
    });
    fixture = TestBed.createComponent(ShowstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
