import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevisitComponent } from './homevisit.component';

describe('HomevisitComponent', () => {
  let component: HomevisitComponent;
  let fixture: ComponentFixture<HomevisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomevisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomevisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
