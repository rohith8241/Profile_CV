import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalEducationComponent } from './professional-education.component';

describe('ProfessionalEducationComponent', () => {
  let component: ProfessionalEducationComponent;
  let fixture: ComponentFixture<ProfessionalEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
