import { Injectable } from '@angular/core';
import { ChooseUs } from '../../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class PublicContentService {

  constructor() { }

  chooseUs: Array<ChooseUs> = [
    {
      id: 1,
      image: "assets/images/icons/icon-5.png",
      name: 'Smart Investment',
      nameAr: 'الاستثمار الذكي',
      description: "Invest in one of the world’s most profitable real estate markets with high rental yields, zero income tax, and consistent capital appreciation in the UAE.",
      descriptionAr: "استثمر في أحد أكثر أسواق العقارات ربحية في العالم مع عائدات إيجارية عالية وضريبة دخل صفرية وتقدير رأس المال المستمر في دولة الإمارات العربية المتحدة."
    },
    {
      id: 2,
      image: "assets/images/icons/icon-1.png",
      name: 'Wide Renge Of Properties',
      nameAr: 'مجموعة واسعة من العقارات',
      description: "Discover a diverse portfolio of properties to suit every lifestyle and budget — from cozy apartments to luxurious estates, there’s something for everyone.",
      descriptionAr: "اكتشف مجموعة متنوعة من العقارات التي تناسب كل نمط حياة وميزانية - من الشقق المريحة إلى العقارات الفاخرة، هناك ما يناسب الجميع."
    },
    {
      id: 3,
      image: "assets/images/icons/icon-2.png",
      name: 'Trusted by thousands',
      nameAr: 'موثوق بها من قبل الآلاف',
      description: "Trusted by thousands for our dedication to excellence — experience the care and reliability that keeps clients returning and recommending confidently.",
      descriptionAr: "تحظى شركتنا بثقة الآلاف بفضل التزامنا بالتميز - جرب الرعاية والموثوقية التي تجعل العملاء يعودون ويوصون بنا بثقة."
    },
    {
      id: 4,
      image: "assets/images/icons/icon-4.png",
      name: 'We are here near you',
      nameAr: 'نحن هنا بالقرب منك',
      description: "We are here near you with local expertise and personalized support — always ready to assist you with friendly service right where you need it.",
      descriptionAr: "نحن هنا بالقرب منك بخبرة محلية ودعم شخصي - مستعدون دائمًا لمساعدتك بخدمة ودية حيث تحتاج إليها."
    },
    //      <article class="col-lg-3 col-md-6 col-xs-12 serv  mb-3 pt" data-aos="fade-up">
    //     <div class="serv-flex arrow">
    //         <div class="art-1 img-15">
    //             <img src="assets/images/icons/icon-3.png" alt="">
    //             <h3 class="tajawal-bold">Financing made easy</h3>
    //         </div>
    //         <div class="service-text-p">
    //             <p class="text-center tajawal-regular">Financing made easy with flexible solutions and expert
    //                 support — enjoy a smooth, stress-free process tailored to your unique needs and goals.</p>
    //         </div>
    //     </div>
    // </article> 
  ];

  stats = [
    { icon: 'bi-house-door', value: '11,000+', label: 'Homes delivered', labelAr: "المنازل المُسلمة" },
    { icon: 'bi-check2-circle', value: '15,000+', label: 'Completed Projects', labelAr: "المشاريع المنجزة" },
    { icon: 'bi-people', value: '10.000+', label: 'Brokerage deals', labelAr: "صفقات الوساطة" },
    { icon: 'bi-graph-up', value: '16+', label: 'Years in Operation', labelAr: "سنوات الخبرة" }
  ];

  invExcellence = [
    { value: "+15", desc: "Years of experience", descAr: "سنوات من الخبرة" },
    { value: "+1000", desc: "Successful projects", descAr: "مشاريع ناجحة" },
    { value: "24/7", desc: "Local support", descAr: "الدعم المحلي" },
    { value: "99%", desc: "Client satisfaction", descAr: "رضا العملاء" },
  ]

  ourPurpose = [
    {
      id: 1,
      title: 'Investment Solutions',
      titleAr: 'حلول الاستثمار',
      image: "assets/images/purpose1.webp",
      description: 'Helping individuals and institutions grow wealth through smart, secure financial strategies.',
      descriptionAr: 'مساعدة الأفراد والمؤسسات على تنمية الثروة من خلال استراتيجيات مالية ذكية وآمنة.',
      points: [
        'Tailored investment portfolios for individuals and enterprises.',
        'Maximize returns with risk-managed financial planning.',
        'Sustainable and impact-driven investments.',
        'Expert financial advisory and strategic consulting.',
        'Support national economic development.',
        'Invest in innovation, startups, and emerging markets.'
      ],
      pointsAr: [
        'تقديم محافظ استثمارية مخصصة للأفراد والشركات.',
        'تعظيم العوائد من خلال تخطيط مالي مدروس ومدار للمخاطر.',
        'الاستثمار المستدام والمؤثر.',
        'تقديم استشارات مالية احترافية واستراتيجية.',
        'دعم التنمية الاقتصادية الوطنية.',
        'الاستثمار في الابتكار والشركات الناشئة والأسواق الواعدة.'
      ]
    },
    {
      id: 2,
      title: 'Real Estate Services & Property Investment',
      titleAr: 'الخدمات العقاريّة واستثمار الممتلكات',
      image: "assets/images/purpose2.webp",
      description: 'Shaping modern living and business environments through visionary property solutions.',
      descriptionAr: 'تشكيل بيئات سكنية وتجارية حديثة من خلال حلول عقارية مبتكرة.',
      points: [
        'Execute residential, commercial, and industrial properties.',
        'Manage assets to generate rental income and long-term value.',
        'Support urban development and smart city planning.',
        'Guide property acquisition and sales with transparency.',
        'Deliver accessible and aesthetic housing.',
        'Invest in luxury and high-end real estate.'
      ],
      pointsAr: [
        'تنفيذ مشاريع سكنية وتجارية وصناعية.',
        'إدارة الأصول لتحقيق دخل إيجاري وقيمة طويلة الأجل.',
        'دعم التنمية الحضرية وتخطيط المدن الذكية.',
        'توجيه العملاء في شراء وبيع العقارات بشفافية.',
        'توفير مساكن ميسّرة وعالية الجودة.',
        'الاستثمار في العقارات الفاخرة والعالية القيمة.'
      ]
    },
    {
      id: 3,
      title: 'Technical & Digital Solutions',
      titleAr: 'الحلول التقنيّة والرقميّة',
      image: "assets/images/purpose3.webp",
      description: 'Empowering businesses with future-ready technology and smart infrastructure.',
      descriptionAr: 'تمكين الشركات بالتقنيات الحديثة والبنية التحتية الذكية للمستقبل.',
      points: [
        'Digitally transform businesses with custom software.',
        'Secure organizations with cybersecurity frameworks.',
        'Use data analytics and AI for insights.',
        'Provide IT infrastructure and support.',
        'Develop smart IoT and automation systems.',
        'Technology consulting for innovation and growth.'
      ],
      pointsAr: [
        'التحول الرقمي للأعمال من خلال حلول برمجية مخصصة.',
        'تأمين المؤسسات من خلال أنظمة الحماية والأمن السيبراني.',
        'تحليل البيانات واستخدام الذكاء الاصطناعي لاستخلاص الرؤى.',
        'توفير البنية التحتية والدعم الفني لتقنية المعلومات.',
        'تطوير أنظمة ذكية تشمل إنترنت الأشياء والأتمتة.',
        'تقديم الاستشارات التقنية لدعم الابتكار والنمو.'
      ]
    }
  ];

  jobs = [
    // Investment Company
    {
      id: 1,
      title: "Investment Analyst",
      titleAr: "محلل استثماري",
      description: "Analyze financial data, assess risks, and identify profitable opportunities.",
      descriptionAr: "تحليل البيانات المالية، وتقييم المخاطر، وتحديد الفرص الاستثمارية المربحة."
    },
    {
      id: 2,
      title: "Business Development Executive",
      titleAr: "تنفيذي تطوير الأعمال",
      description: "Identify and build strategic partnerships to expand investment opportunities.",
      descriptionAr: "تحديد وبناء شراكات استراتيجية لتوسيع فرص الاستثمار."
    },
    {
      id: 3,
      title: "Investment Research Associate",
      titleAr: "مساعد أبحاث استثمارية",
      description: "Support analysts by conducting market research and preparing reports.",
      descriptionAr: "دعم المحللين من خلال إجراء أبحاث السوق وإعداد التقارير."
    },

    // Properties Company
    {
      id: 4,
      title: "Property Sales Consultant",
      titleAr: "مستشار مبيعات عقارية",
      description: "Promote and sell residential and commercial properties.",
      descriptionAr: "تسويق وبيع العقارات السكنية والتجارية."
    },
    {
      id: 5,
      title: "Property Consultant Assistant",
      titleAr: "مساعد مستشار عقاري",
      description: "Assist senior consultants in preparing listings, client communication, and property visits.",
      descriptionAr: "مساعدة المستشارين العقاريين في تجهيز القوائم، والتواصل مع العملاء، وزيارات العقارات."
    },
    {
      id: 6,
      title: "Real Estate Marketing Officer",
      titleAr: "مسؤول تسويق عقاري",
      description: "Plan and execute marketing campaigns to attract property buyers and tenants.",
      descriptionAr: "تخطيط وتنفيذ حملات تسويقية لجذب مشتري ومستأجري العقارات."
    },

    // Information Systems Company
    {
      id: 7,
      title: "System Administrator",
      titleAr: "مسؤول أنظمة",
      description: "Maintain IT systems, servers, and networks for stability.",
      descriptionAr: "صيانة أنظمة تكنولوجيا المعلومات والخوادم والشبكات لضمان الاستقرار."
    },
    {
      id: 8,
      title: "Network Engineer",
      titleAr: "مهندس شبكات",
      description: "Design and implement secure, scalable network solutions.",
      descriptionAr: "تصميم وتنفيذ حلول شبكية آمنة وقابلة للتوسع."
    },
    {
      id: 9,
      title: "Digital Marketing Specialist",
      titleAr: "أخصائي تسويق رقمي",
      description: "Manage online presence, SEO, and campaigns to promote IT services.",
      descriptionAr: "إدارة الوجود الإلكتروني، وتحسين محركات البحث، والحملات للترويج لخدمات تكنولوجيا المعلومات."
    },
    {
      id: 10,
      title: "Other Positions",
      titleAr: "وظائف أخرى",
      description: "Didn't find your ideal role? Submit your CV and be considered for upcoming opportunities.",
      descriptionAr: "لم تجد الوظيفة المناسبة؟ أرسل سيرتك الذاتية ليتم النظر فيها للفرص القادمة."
    }
  ];



  getWhyChooseUs(): Array<ChooseUs> {
    return this.chooseUs
  }

  getPropStats(): Array<any> {
    return this.stats
  }

  getInvExcellence(): Array<any> {
    return this.invExcellence
  }

  getOurPurpose(): Array<any> {
    return this.ourPurpose
  }

  getOurJobsOpportunities(): Array<any> {
    return this.jobs
  }
}
