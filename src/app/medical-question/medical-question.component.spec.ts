import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalQuestionComponent } from './medical-question.component';

describe('MedicalQuestionComponent', () => {
  let component: MedicalQuestionComponent;
  let fixture: ComponentFixture<MedicalQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
