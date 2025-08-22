import { Component, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../shared/services/language.service';
import { SharedModule } from '../../shared/shared.module';
import { ICompany } from '../../app.component.models';
import { CompaniesService } from '../../shared/services/companies.service';

interface Page {
  title: string;
  titleAr: string;
  path: string;
  keywords?: string[];
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  results: (Page | ICompany)[] = [];
  showResults: boolean = false;
  currentLang: string = "ar"
  languageService = inject(LanguageService);
  companiesServices = inject(CompaniesService);
  companies: Array<ICompany> = [];
  @Output() resultSelected = new EventEmitter<void>();

  isPage(item: Page | ICompany): item is Page {
    return (item as Page).path !== undefined;
  }

  pages: Page[] = [
    {
      title: 'Home',
      titleAr: 'الرئيسية',
      path: '/home',
      keywords: [
        'main', 'welcome', 'start', 'home', 'homepage',
        'الرئيسية', 'الصفحة الرئيسية', 'ابدأ', 'مرحبا', 'بداية'
      ]
    },
    {
      title: 'About Us',
      titleAr: 'من نحن',
      path: '/about-us',
      keywords: [
        'about', 'about us', 'company', 'team', 'vision', 'who we are',
        'objectives', 'values', 'uae', 'group',
        'من نحن', 'عن الشركة', 'الشركة', 'الفريق', 'رؤيتنا', 'معلومات عنا',
        'أهداف', 'قيم', 'الإمارات', 'مجموعة'
      ]
    },
    {
      title: 'Contact Us',
      titleAr: 'اتصل بنا',
      path: '/contact-us',
      keywords: [
        'contact', 'contact us', 'email', 'call', 'phone', 'location', 'address',
        'اتصل', 'اتصل بنا', 'تواصل', 'بريد', 'هاتف', 'موقع', 'العنوان'
      ]
    },
    {
      title: 'Purpose',
      titleAr: 'غرضنا',
      path: '/purpose',
      keywords: [
        'purpose', 'mission', 'goals', 'values', 'objective', 'target',
        'غرض', 'غرضنا', 'مهمة', 'أهداف', 'قيم', 'هدف', 'رسالة'
      ]
    },
    {
      title: 'Careers',
      titleAr: 'وظائف',
      path: '/careers',
      keywords: [
        'careers', 'jobs', 'join', 'team', 'hiring', 'recruitment', 'work',
        'وظائف', 'عمل', 'انضمام', 'الانضمام', 'فرص عمل', 'توظيف', 'الوظائف'
      ]
    }
  ];


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });

    this.companies = this.companiesServices.getCompanies();
  }


  // Triggered every key stroke
  onInputChange() {
    const search = this.searchText.toLowerCase().trim();

    if (!search) {
      this.results = [];
      this.showResults = false;
      return;
    }

    // Search static pages
    const matchedPages = this.pages.filter(page => {
      const title = this.currentLang === 'en' ? page.title : page.titleAr;
      const keywords = page.keywords?.join(' ').toLowerCase() || '';
      return (title?.toLowerCase().includes(search)) || keywords.includes(search);
    });

    // Search companies
    const matchedCompanies = this.companies.filter(company => {
      const title = this.currentLang === 'en' ? (company.title ?? '') : (company.titleAr ?? '');
      return title.toLowerCase().includes(search);
    });

    this.results = [...matchedPages, ...matchedCompanies];
    this.showResults = true;
  }

  goToPage(path: string | undefined) {
    if (!path) return; // safety check
    this.router.navigate([path]);
    this.clearSearch();
    // Emit event to parent (HeaderComponent) to close offcanvas
    this.resultSelected.emit();
  }


  goToCompany(company: ICompany, event?: MouseEvent) {
    event?.stopPropagation();
    const slug = (company.title ?? '').toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['companies', slug], { state: { id: company.id } });
    this.clearSearch();
    // Emit event to parent (HeaderComponent) to close offcanvas
    this.resultSelected.emit();
  }

  clearSearch() {
    this.searchText = '';
    this.results = [];
    this.showResults = false;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-search')) this.showResults = false;
  }
}
