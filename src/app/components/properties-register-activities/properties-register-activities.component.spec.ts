import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesRegisterActivitiesComponent } from './properties-register-activities.component';

describe('PropertiesRegisterActivitiesComponent', () => {
  let component: PropertiesRegisterActivitiesComponent;
  let fixture: ComponentFixture<PropertiesRegisterActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesRegisterActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertiesRegisterActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
