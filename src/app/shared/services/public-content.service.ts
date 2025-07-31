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
    { icon: 'bi-house-door', value: '15,000+', label: 'Homes delivered', labelAr: "المنازل المُسلمة" },
    { icon: 'bi-check2-circle', value: '20,000+', label: 'Completed Projects', labelAr: "المشاريع المنجزة" },
    { icon: 'bi-people', value: '12.000+', label: 'Brokerage deals', labelAr: "صفقات الوساطة" },
    { icon: 'bi-graph-up', value: '30+', label: 'Years in Operation', labelAr: "سنوات الخبرة" }
  ];

  invExcellence = [
    { value: "+30", desc: "Years of experience", descAr: "سنوات من الخبرة" },
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
      title: 'Real Estate & Property Development',
      titleAr: 'التطوير العقاري وإدارة الممتلكات',
      image: "assets/images/purpose2.webp",
      description: 'Shaping modern living and business environments through visionary property solutions.',
      descriptionAr: 'تشكيل بيئات سكنية وتجارية حديثة من خلال حلول عقارية مبتكرة.',
      points: [
        'Develop residential, commercial, and industrial properties.',
        'Manage assets to generate rental income and long-term value.',
        'Support urban development and smart city planning.',
        'Guide property acquisition and sales with transparency.',
        'Deliver accessible and aesthetic housing.',
        'Invest in luxury and high-end real estate.'
      ],
      pointsAr: [
        'تطوير مشاريع سكنية وتجارية وصناعية.',
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
      titleAr: 'الحلول التقنية والرقمية',
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
}
