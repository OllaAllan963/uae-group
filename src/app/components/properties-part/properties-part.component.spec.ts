import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPartComponent } from './properties-part.component';

describe('PropertiesPartComponent', () => {
  let component: PropertiesPartComponent;
  let fixture: ComponentFixture<PropertiesPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertiesPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
