import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { ICompany, SubCompany } from '../../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.myVideo.nativeElement;
    video.muted = true; // ensure muted
    video.play().catch(err => {
      console.log('Autoplay prevented:', err);
    });
  }

  constructor() { }

  companies: Array<ICompany> = [
    {
      id: 1,
      image: 'assets/images/carousel/img1.webp',
      image1: "assets/images/carousel/img11.png",
      video: 'assets/videos/investement.mp4',
      video2: 'assets/videos/investement2.mp4',
      caption: "Empowering growth through strategic investment",
      captionAr: 'تمكين النمو من خلال الاستثمار الاستراتيجي',
      title: 'UAE Investment and Development',
      titleAr: 'يو إيه إي للاستثمار والتنمية',
      activitiesTitle: "Investment Company’s Activities",
      activitiesTitleAr: "نشاط الشركة الاستثماريّة",
      description: "UAE Investment and Development Group connects global investors with Gulf opportunities across key sectors. We offer expert support, financing, and strategic partnerships to grow your business.",
      descriptionAr: "مجموعة يو إيه إي للاستثمار والتنمية تربط المستثمرين العالميين بفرص الاستثمار في الخليج عبر القطاعات الرئيسية. نقدم لكم دعمًا متخصصًا وتمويلًا وشراكات استراتيجية لتنمية أعمالكم.",
      description1: "UAE Investment and Development Group bridges global innovation with local expertise, helping foreign businesses grow across the UAE. Based in Dubai, we empower diverse entrepreneurs through regional knowledge and resources.",
      description1Ar: "تجمع مجموعة يو إيه إي للاستثمار والتنمية بين الابتكار العالمي والخبرة المحلية، مما يساعد الشركات الأجنبية على النمو في جميع أنحاء الإمارات العربية المتحدة. انطلاقًا من مقرنا في دبي، نمكّن رواد الأعمال المتنوعين من خلال المعرفة والموارد الإقليمية.",
      description2: "We support startups and enterprises across sectors like tourism, health, and agriculture. With strong GCC ties, we connect clients to top investors in Saudi Arabia, Qatar, Oman, Bahrain, Kuwait, and other nations.",
      description2Ar: "ندعم الشركات الناشئة والمؤسسات في قطاعات مثل السياحة والصحة والزراعة. بفضل علاقاتنا القوية مع دول مجلس التعاون الخليجي، نربط عملاءنا بكبار المستثمرين في المملكة العربية السعودية وقطر وسلطنة عمان والبحرين والكويت وغيرها من الدول."
    },
    {
      id: 2,
      image: 'assets/images/carousel/img2.webp',
      image1: "assets/images/carousel/img14.png",
      video: 'assets/videos/properties.mp4',
      video2: 'assets/videos/properties2.mp4',
      caption: "Your partner in profitable property investment",
      captionAr: 'شريكك في الاستثمار العقاري المربح',
      title: 'UAE International Property',
      titleAr: 'يو ايه إي انترناشيونال للعقارات',
      activitiesTitle: "Property Company’s Activities",
      activitiesTitleAr: "نشاط الشركة العقاريّة",
      description: 'part of the prestigious UAE Group, is a leading real estate enterprise specializing in premium residential, commercial, and investment opportunities across the United Arab Emirates. With a focus on quality, integrity, and innovation, we connect clients with properties that define luxury, value, and lasting potential.',
      descriptionAr: 'التابعة لمجموعة يو إيه إي المرموقة ، هي شركة عقارية رائدة متخصصة في توفير فرص سكنية وتجارية واستثمارية فاخرة في جميع أنحاء الإمارات العربية المتحدة. مع تركيزنا على الجودة والنزاهة والابتكار، نربط عملائنا بعقارات تُجسّد الفخامة والقيمة العالية والإمكانات المستدامة.',
      description1: "UAE International Property leads in real estate management, brokerage, and land investment, offering tailored services for buying, selling, and property care with transparency and precision.",
      description1Ar: "تعد شركة يو إيه إي انترناشيونال للعقارات رائدة في مجال إدارة العقارات والوساطة والاستثمار في الأراضي، وتقدم خدمات مصممة خصيصًا للشراء والبيع ورعاية العقارات بشفافية ودقة.",
      description2: " We manage all property types with end-to-end solutions, using smart systems for contracts, reporting, and tenant support to maximize returns and strengthen owner-tenant ties.",
      description2Ar: "نحن ندير جميع أنواع الممتلكات بحلول شاملة، باستخدام أنظمة ذكية للعقود وإعداد التقارير ودعم المستأجرين لتحقيق أقصى قدر من العائدات وتعزيز العلاقات بين المالك والمستأجر."
    },
    {
      id: 3,
      image: 'assets/images/carousel/img7.webp',
      video: 'assets/videos/is1.mp4',
      video2: 'assets/videos/is2.mp4',
      caption: "Technology Solutions Tailored for Your Growth",
      captionAr: 'حلول تكنولوجية مصممة خصيصًا لنموك',
      title: 'UAE Technical Solutions',
      titleAr: 'يو إيه إي للحلول التقنية',
      activitiesTitle: "Technical Company’s Activities",
      activitiesTitleAr: "نشاط الشركة التقنيّة",
      description: 'We deliver innovative and dependable technology solutions that boost business efficiency and connectivity. By streamlining data management and strengthening IT infrastructure, we help organizations adapt, grow, and stay competitive in today’s fast-evolving digital landscape. Our commitment to excellence ensures tailored support that meets the unique needs of each client.',
      descriptionAr: "نقدم حلولاً تقنية مبتكرة وموثوقة تعزز كفاءة الأعمال وترابطها. من خلال تبسيط إدارة البيانات وتعزيز البنية التحتية لتكنولوجيا المعلومات، نساعد المؤسسات على التكيف والنمو والحفاظ على قدرتها التنافسية في ظل التطور الرقمي السريع اليوم. التزامنا بالتميز يضمن دعمًا مصممًا خصيصًا لتلبية الاحتياجات الفريدة لكل عميل."
    }
  ];

  getCompanies(): Array<ICompany> {
    return this.companies
  }

  getCompany(id: string): ICompany {
    const numericId = Number(id);
    const result = this.companies.find(companies => companies.id === numericId);
    if (!result) {
      throw new Error(`Company with ID ${numericId} not found`);
    }
    return result;
  }
}
