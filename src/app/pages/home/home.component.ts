import { Component, inject } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { InvestmentPartComponent } from '../../components/investment-part/investment-part.component';
import { PropertiesPartComponent } from '../../components/properties-part/properties-part.component';
import { InvestmentRegisterActivitiesComponent } from '../../components/investment-register-activities/investment-register-activities.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { PropertiesRegisterActivitiesComponent } from '../../components/properties-register-activities/properties-register-activities.component';
import { SharedModule } from '../../shared/shared.module';
import { InvestmentPart2Component } from '../../components/investment-part2/investment-part2.component';
import { LanguageService } from '../../shared/services/language.service';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InvestmentPart2Component, PropertiesRegisterActivitiesComponent, CarouselComponent, InvestmentPartComponent, PropertiesPartComponent, InvestmentRegisterActivitiesComponent, WhyChooseUsComponent, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //start variables
  languageService = inject(LanguageService);
  currentLang: string = "ar";
  seoService = inject(SeoService);
  //end variables

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;

      // Update SEO dynamically based on current language
      this.seoService.setSeo(
        'UAE Group',
        'مجموعة يو إيه إي',
        'UAE Investment and Development, The Activities of the Investment Company, UAE International Property, The Activities of the Property Company, Why Invest in the UAE, Smart Investment, Wide Range of Properties, Diverse Investment Opportunities.',
        'يو إيه إي للإستثمار والتنمية، أنشطة الشركة الإستثماريّة، يو ايه إي انترناشيونال للعقارات، أنشطة الشركة العقاريّة، لماذا تستثمر في الإمارات العربية المتحدة؟ الاستثمار الذكي، مجموعة واسعة من العقارات، فرص استثمارية متنوعة.',
        'UAE Group, UAE Investment and Development, Investment Company, UAE International Property, Property Company, UAE Technical Solutions, Technical Company, Real Estate, Investment, Smart Investment, Properties, Leasing, Buying and Selling, Brokerage, Financial Growth, Diverse Opportunities, UAE Economy, Dubai, Tax Free, High ROI, Technology Solutions, IT Services',
        'مجموعة يو إيه إي, يو إيه إي للاستثمار والتنمية, أنشطة الشركة الاستثماريّة, يو ايه إي انترناشيونال للعقارات, أنشطة الشركة العقاريّة, يو إيه إي للحلول التقنية, أنشطة الشركة التقنية, عقارات, استثمار, الاستثمار الذكي, الممتلكات, تأجير, شراء وبيع العقارات, الوساطة, نمو مالي, فرص استثمارية متنوعة, اقتصاد الإمارات, دبي, ضريبة صفرية, عائد إيجاري مرتفع, حلول تقنية, خدمات تكنولوجيا المعلومات',

        this.currentLang
      );
    });
  }
}