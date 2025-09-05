import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { CompanyDetails, ICompany, Property } from '../../app.component.models';
import { ActivitiesService } from '../../shared/services/activities.service';
import { CompaniesService } from '../../shared/services/companies.service';
import { PropertiesService } from '../../shared/services/properties.service';
import { LanguageService } from '../../shared/services/language.service';
import { SharedModule } from '../../shared/shared.module';
import { PublicContentService } from '../../shared/services/public-content.service';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})

export class CompaniesComponent {
  //start variables
  @ViewChild('myVideo') myVideoRef!: ElementRef<HTMLVideoElement>;
  mainColor: string = "#ec1c23"
  id!: string;
  activitiesService = inject(ActivitiesService);
  companiesService = inject(CompaniesService);
  companyDetails!: CompanyDetails;
  uaeC!: ICompany;
  backgroundImage: string = '/assets/images/companies/companies.jpg';
  propertiesService = inject(PropertiesService);
  properties: Array<Property> = [];
  publicContentService = inject(PublicContentService);
  stats: Array<any> = [];
  invExcellence: Array<any> = [];
  languageService = inject(LanguageService);
  currentLang: string = "ar";
  seoService = inject(SeoService);
  currentSlug: string | null = null;

  //end variables

  // constructor(private router: Router) {
  //   this.id = this.router.getCurrentNavigation()?.extras.state?.['id'];
  //   console.log('Hidden ID:', this.id);
  // }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
      if (this.currentSlug) {
        this.updateSeoBySlug(this.currentSlug);
      }
    });
    this.route.paramMap.subscribe(params => {
      this.currentSlug = params.get('slug');
      this.updateSeoBySlug(this.currentSlug);
      this.id = history.state?.id;

      if (this.id != null) {
        this.companyDetails = this.activitiesService.getCompanyDetails(this.id);
        this.uaeC = this.companiesService.getCompany(this.id);
        this.backgroundImage = this.uaeC.image
        console.log(this.companyDetails);

        if (this.id == '2') {
          this.properties = this.propertiesService.getProperties()
        }

        // Ensure video is reloaded
        setTimeout(() => {
          this.reloadVideo();
        });
      } else {
        console.error('ID not found in state');
      }

      this.stats = this.publicContentService.getPropStats();
      this.invExcellence = this.publicContentService.getInvExcellence();
    });
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }

  openedIndex: number | null = null;

  togglePanel(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  reloadVideo(): void {
    if (this.myVideoRef && this.myVideoRef.nativeElement) {
      this.myVideoRef.nativeElement.load();
    }
  }

  updateSeoBySlug(slug: string | null) {
    if (!slug) return;

    switch (slug) {
      case 'uae-investment-and-development':
        this.seoService.setSeo(
          'UAE Investment and Development',
          'يو إيه إي للاستثمار والتنمية',
          'UAE Investment and Development, UAE Investment and Development Group connects global investors with Gulf opportunities across key sectors. We offer expert support, financing, and strategic partnerships to grow your business. Our activities include General Trading, Investment in Commercial, Industrial, Agricultural, Oil & Natural Gas, Sport, Water, Healthcare, Educational, Tourist, Technological, and Energy Enterprises. 15 years of excellence, 1000+ successful projects, 24/7 local support, 99% client satisfaction.',
          'يو إيه إي للاستثمار والتنمية، مجموعة يو إيه إي للاستثمار والتنمية تربط المستثمرين العالميين بفرص الاستثمار في الخليج عبر القطاعات الرئيسية. نقدم دعمًا متخصصًا، تمويلًا، وشراكات استراتيجية لتنمية أعمالكم. تشمل أنشطتنا التجارة العامة، الاستثمار في المشاريع التجارية والصناعية والزراعية والنفط والغاز والمشاريع الرياضية والمياه والخدمات الصحية والتعليمية والسياحية والتكنولوجية والطاقة. 15 سنة من الخبرة، أكثر من 1000 مشروع ناجح، دعم محلي 24/7، رضا العملاء 99%.',
          'UAE Investment, UAE Investment and Development, Investment Company, Global Investors, Gulf Opportunities, General Trading, Commercial Investment, Industrial Investment, Agricultural Investment, Oil Projects, Gas Projects, Sport Projects, Water Projects, Healthcare Investment, Educational Investment, Tourism Investment, Technological Investment, Energy Investment, Strategic Partnerships, Financing, Business Growth, 15 Years Experience, 1000 Projects, Local Support, Client Satisfaction',
          'الاستثمار, يو إيه إي للاستثمار والتنمية, شركة استثمار, المستثمرين العالميين, فرص الاستثمار في الخليج, التجارة العامة, الاستثمار في المشاريع التجارية, الاستثمار في المشاريع الصناعية, الاستثمار في المشاريع الزراعية, مشاريع النفط, مشاريع الغاز, المشاريع الرياضية, مشاريع المياه, الاستثمار في الخدمات الصحية, الاستثمار في المشاريع التعليمية, الاستثمار السياحي, الاستثمار التكنولوجي, الاستثمار في الطاقة, شراكات استراتيجية, تمويل, نمو الأعمال, 15 سنة خبرة, أكثر من 1000 مشروع, دعم محلي, رضا العملاء',

          this.currentLang
        );
        break;

      case 'uae-international-property':
        this.seoService.setSeo(
          'UAE International Property',
          'يو ايه إي انترناشيونال للعقارات',
          'UAE International Property, part of the prestigious UAE Group, is a leading real estate company specializing in premium residential, commercial, and investment opportunities across the UAE. Our activities include buying and selling of real estate, real estate brokerage, and leasing services. Explore our curated selection of apartments, houses, townhouses, villas, offices, warehouses, hotels, whole buildings, compounds, and lands. Renowned for excellence and innovation, UAE Group delivers 11,000+ homes, 15,000+ projects, 10,000+ brokerage deals, and 16+ years of expertise.',
          'يو ايه إي انترناشيونال للعقارات، التابعة لمجموعة يو إيه إي المرموقة، هي شركة عقارية رائدة متخصصة في توفير فرص سكنية وتجارية واستثمارية فاخرة في جميع أنحاء الإمارات. تشمل أنشطتنا شراء وبيع العقارات، الوساطة في بيع وشراء العقارات، وخدمات تأجير الممتلكات. اكتشف مجموعتنا المختارة من الشقق، البيوت، المنازل، الفلل، المكاتب، المستودعات، الفنادق، الأبنية الكاملة، المجمعات، والأراضي. تتميز مجموعة يو إيه إي بالتميز والابتكار، مع أكثر من 11,000 منزل مُسلم، 15,000 مشروع مكتمل، 10,000 صفقة وساطة، و16+ سنة من الخبرة.',
          'UAE International Property, UAE Group, Real Estate, Property Investment, Buying and Selling, Real Estate Brokerage, Leasing, Apartments, Houses, Townhouses, Villas, Offices, Warehouses, Hotels, Whole Buildings, Compounds, Lands, Luxury Properties, Smart Design, Sustainable Properties, UAE Real Estate, Premium Real Estate, UAE Properties, 11,000 Homes Delivered, 15,000 Projects, 10,000 Brokerage Deals, 16 Years Experience',
          'يو ايه إي انترناشيونال للعقارات, مجموعة يو إيه إي, العقارات, الاستثمار العقاري, شراء وبيع العقارات, الوساطة العقارية, تأجير الممتلكات, شقق, بيوت, منازل, فلل, مكاتب, مستودعات, فنادق, أبنية كاملة, مجمعات, أراضي, عقارات فاخرة, تصميم ذكي, عقارات مستدامة, عقارات الإمارات, عقارات ممتازة, 11,000 منزل مُسلم, 15,000 مشروع مكتمل, 10,000 صفقة وساطة, 16 سنة خبرة',

          this.currentLang
        );
        break;

      case 'uae-technical-solutions':
        this.seoService.setSeo(
          'UAE Technical Solutions',
          'يو إيه إي للحلول التقنية',
          'UAE Technical Solutions delivers innovative and dependable technology solutions that enhance business efficiency and connectivity. Our activities include computer systems housing, IT network services, data entry, internet content provision, IT infrastructure, and smart infrastructure solutions. We help organizations adapt, grow, and stay competitive in the fast-evolving digital landscape. Tailored support and real results for every client.',
          'يو إيه إي للحلول التقنية تقدم حلولاً تقنية مبتكرة وموثوقة تعزز كفاءة الأعمال وترابطها. تشمل أنشطتنا خدمات إيواء أجهزة ونظم المعلومات، خدمات شبكات تقنية المعلومات، خدمات إدخال البيانات، إمداد مواقع الشبكة بالمحتويات، إنشاء البنية التحتية لتقنية المعلومات، وحلول البنية التحتية الذكية. نساعد المؤسسات على التكيف والنمو والبقاء تنافسية في ظل التطور الرقمي السريع، مع دعم مصمم خصيصًا لكل عميل وتحقيق نتائج حقيقية.',
          'UAE Technical Solutions, UAE Group, Technology Solutions, IT Services, IT Infrastructure, Smart Infrastructure, Data Management, Network Services, Computer Systems Housing, Data Entry, Internet Content Provider, Business Efficiency, Digital Transformation, Innovative Technology, Tailored IT Support, Real Results, IT Solutions UAE',
          'يو إيه إي للحلول التقنية, مجموعة يو إيه إي, حلول تقنية, خدمات تكنولوجيا المعلومات, البنية التحتية لتكنولوجيا المعلومات, البنية التحتية الذكية, إدارة البيانات, خدمات الشبكات, إيواء أجهزة الحاسوب, إدخال البيانات, إمداد المحتويات على الإنترنت, كفاءة الأعمال, التحول الرقمي, التكنولوجيا المبتكرة, دعم تقني مصمم, نتائج حقيقية, حلول تقنية الإمارات',

          this.currentLang
        );
        break;

      default:
        this.seoService.setSeo(
          'UAE Group',
          'مجموعة يو إيه إي',
          'UAE Investment and Development, The Activities of the Investment Company, UAE International Property, The Activities of the Property Company, Why Invest in the UAE, Smart Investment, Wide Range of Properties, Diverse Investment Opportunities.',
          'يو إيه إي للإستثمار والتنمية، أنشطة الشركة الإستثماريّة، يو ايه إي انترناشيونال للعقارات، أنشطة الشركة العقاريّة، لماذا تستثمر في الإمارات العربية المتحدة؟ الاستثمار الذكي، مجموعة واسعة من العقارات، فرص استثمارية متنوعة.',
          'UAE Group, UAE Investment and Development, Investment Company, UAE International Property, Property Company, UAE Technical Solutions, Technical Company, Real Estate, Investment, Smart Investment, Properties, Leasing, Buying and Selling, Brokerage, Financial Growth, Diverse Opportunities, UAE Economy, Dubai, Tax Free, High ROI, Technology Solutions, IT Services',
          'مجموعة يو إيه إي, يو إيه إي للاستثمار والتنمية, أنشطة الشركة الاستثماريّة, يو ايه إي انترناشيونال للعقارات, أنشطة الشركة العقاريّة, يو إيه إي للحلول التقنية, أنشطة الشركة التقنية, عقارات, استثمار, الاستثمار الذكي, الممتلكات, تأجير, شراء وبيع العقارات, الوساطة, نمو مالي, فرص استثمارية متنوعة, اقتصاد الإمارات, دبي, ضريبة صفرية, عائد إيجاري مرتفع, حلول تقنية, خدمات تكنولوجيا المعلومات',

          this.currentLang
        );
        break;
    }
  }
}
