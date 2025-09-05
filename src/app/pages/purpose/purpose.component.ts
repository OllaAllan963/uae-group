import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';
import { PublicContentService } from '../../shared/services/public-content.service';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-purpose',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './purpose.component.html',
  styleUrl: './purpose.component.css'
})
export class PurposeComponent {
  //start variables
  mainColor: string = "#ec1c23"
  languageService = inject(LanguageService);
  publicContentService = inject(PublicContentService);
  ouePurpose: Array<any> = [];
  currentLang: string = "ar"
  backgroundImage: string = 'assets/images/purpose.webp';
  imageUrl: string = "assets/images/purpose4.webp";
  seoService = inject(SeoService);
  //end variables

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;

      // Update SEO dynamically based on current language
      this.seoService.setSeo(
        'Our Purpose',
        'غايتنا',
        'Our Purpose, Investment Solutions, Helping individuals and institutions grow wealth, Tailored investment portfolios, Maximize returns, Sustainable investments, Real Estate Services & Property Investment, Modern living and business environments, Smart growth in UAE, Technical & Digital Solutions, Technology consulting, AI and data analytics.',
        'غايتنا، حلول الاستثمار، مساعدة الأفراد والمؤسسات على تنمية الثروة، محافظ استثمارية مخصصة، تعظيم العوائد، الاستثمار المستدام، الخدمات العقاريّة واستثمار الممتلكات، بيئات سكنية وتجارية حديثة، النمو الذكي في الإمارات، الحلول التقنيّة والرقميّة، استشارات تقنية، تحليل البيانات والذكاء الاصطناعي.',
        'UAE Group, Our Purpose, Investment Solutions, Financial Strategies, Wealth Growth, Tailored Portfolios, Risk Management, Sustainable Investments, Real Estate, Property Investment, Smart Growth, UAE, Technical Solutions, Digital Solutions, Technology Consulting, AI, Data Analytics, IoT, Automation',
        'مجموعة يو إيه إي, غايتنا, حلول الاستثمار, استراتيجيات مالية, تنمية الثروة, محافظ استثمارية مخصصة, إدارة المخاطر, استثمار مستدام, عقارات, استثمار الممتلكات, النمو الذكي, الإمارات, الحلول التقنيّة, الحلول الرقميّة, استشارات تقنية, تحليل البيانات, الذكاء الاصطناعي, إنترنت الأشياء, الأتمتة',

        this.currentLang
      );
    });

    this.ouePurpose = this.publicContentService.getOurPurpose();
  }
}
