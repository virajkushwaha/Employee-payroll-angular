import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddFormsComponent } from './employee-add-forms.component';

describe('EmployeeAddFormsComponent', () => {
  let component: EmployeeAddFormsComponent;
  let fixture: ComponentFixture<EmployeeAddFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAddFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
