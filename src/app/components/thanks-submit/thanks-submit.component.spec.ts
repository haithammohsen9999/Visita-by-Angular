import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksSubmitComponent } from './thanks-submit.component';

describe('ThanksSubmitComponent', () => {
  let component: ThanksSubmitComponent;
  let fixture: ComponentFixture<ThanksSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
