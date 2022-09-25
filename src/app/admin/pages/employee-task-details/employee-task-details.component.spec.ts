import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTaskDetailsComponent } from './employee-task-details.component';

describe('EmployeeTaskDetailsComponent', () => {
  let component: EmployeeTaskDetailsComponent;
  let fixture: ComponentFixture<EmployeeTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
