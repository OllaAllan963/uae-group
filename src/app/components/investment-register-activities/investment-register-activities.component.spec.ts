import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentRegisterActivitiesComponent } from './investment-register-activities.component';

describe('InvestmentRegisterActivitiesComponent', () => {
  let component: InvestmentRegisterActivitiesComponent;
  let fixture: ComponentFixture<InvestmentRegisterActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentRegisterActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentRegisterActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
