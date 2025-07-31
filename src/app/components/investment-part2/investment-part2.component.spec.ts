import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPart2Component } from './investment-part2.component';

describe('InvestmentPart2Component', () => {
  let component: InvestmentPart2Component;
  let fixture: ComponentFixture<InvestmentPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentPart2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
