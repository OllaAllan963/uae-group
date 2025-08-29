import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySlideComponent } from './activity-slide.component';

describe('ActivitySlideComponent', () => {
  let component: ActivitySlideComponent;
  let fixture: ComponentFixture<ActivitySlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitySlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitySlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
