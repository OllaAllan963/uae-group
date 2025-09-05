import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPartComponent } from './investment-part.component';

describe('InvestmentPartComponent', () => {
  let component: InvestmentPartComponent;
  let fixture: ComponentFixture<InvestmentPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
