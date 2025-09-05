import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { PublicContentService } from '../../shared/services/public-content.service';
import { ChooseUs } from '../../app.component.models';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [NgStyle, SharedModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  //start variables
  mainColor: string = "#ec1c23"
  publicContentService = inject(PublicContentService);
  chooseUs: Array<ChooseUs> = [];
  languageService = inject(LanguageService);
  currentLang: string = "ar"
  //end variables

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });

    this.chooseUs = this.publicContentService.getWhyChooseUs()
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }
  features = [
    { title: 'High ROIs – Dubai’s Avg. Gross Rental Yield: <b class="text-warning">7–8%</b>' },
    { title: 'Income Tax | Capital Gains Tax <b class="text-warning">0%</b>' },
    { title: 'High Capital Appreciation <b class="text-warning">up to 8% to 10%</b>' },
    { title: '<b class="text-warning">Unmatched Quality</b> & On-Time Delivery' },
    { title: 'UAE Residential Visa – <b class="text-warning">Up to 10 years</b> (renewable)' },
    { title: 'Stable Economy – <b class="text-warning">Pegged to the US Dollar</b>' },
    { title: 'New Constructions & <b class="text-warning">Trusted Developer for Decades</b>' },
    { title: '0% VAT on Residential Property (<b class="text-warning">5% VAT Standard Rate</b>)' },
    { title: 'Safest City <b class="text-warning">in the World</b>' },
    { title: 'Dubai Ranks <b class="text-warning">3rd Best City to Live In</b>' }
  ];
}
