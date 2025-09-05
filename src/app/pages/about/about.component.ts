import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  //start variables
  mainColor: string = "#ec1c23"
  languageService = inject(LanguageService);
  currentLang: string = "ar"
  backgroundImage: string = 'assets/images/about-us.webp';
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

      this.seoService.setSeo(
        'About Us',
        'من نحن',
        'UAE Group is registered in an economically stable country and active in business. Accredited and trusted, we provide company incorporation, transaction services, financing, and rapid support to help clients focus on business growth.',
        'مجموعة يو إيه إي شركتنا مسجلة في دولة مستقرة اقتصاديًا ونشطة في مجال الأعمال. معتمدة وموثوقة، نقدم تأسيس الشركات، إتمام المعاملات، خدمات تمويلية متنوعة، ودعم سريع لتمكين العملاء من التركيز على تطوير أعمالهم.',
        'UAE Group, About Us, Company Profile, Business Services, Financing Services, Company Incorporation, Trusted, Rapid Support, UAE, Oman Investment Authority Building, Strategic Investments, Property Management, IT Solutions',
        'مجموعة يو إيه إي, من نحن, نبذة عن الشركة, خدمات الأعمال, خدمات التمويل, تأسيس الشركات, موثوقة, دعم سريع, الإمارات, مبنى سلطة الاستثمار في عمان, الاستثمارات الاستراتيجية, إدارة العقارات, حلول تكنولوجيا المعلومات',
        this.currentLang
      );
    });
  }
}
