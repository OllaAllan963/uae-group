import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CompaniesService } from '../../shared/services/companies.service';
import { ICompany } from '../../app.component.models';
import { SharedModule } from '../../shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../shared/services/language.service';
import { SearchComponent } from '../search/search.component';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, RouterLink, RouterModule, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  //start variables
  mainColor: string = "#ec1c23"
  companiesServices = inject(CompaniesService);
  companies: Array<ICompany> = [];
  isMenuOpen: boolean = false;
  translateService = inject(TranslateService);
  languageService = inject(LanguageService);
  @ViewChild('menu', { static: true }) menuRef!: ElementRef;
  @ViewChild('menuButton', { static: true }) menuButtonRef!: ElementRef;
  currentLang: string = "ar"
  @ViewChild('offcanvasNavbar') offcanvasNavbar!: ElementRef<HTMLDivElement>;
  offcanvasInstance!: Offcanvas;
  isCompaniesOpen = false;
  //end variables

  ngOnInit(): void {
    this.companies = this.companiesServices.getCompanies();
  }

  //
  toggleMenu(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  openMenu(): void {
    this.isMenuOpen = true;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  goToCompany(company: ICompany, event: MouseEvent): void {
    event.stopPropagation();
    const slug = company.title.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['companies', slug], {
      state: { id: company.id }
    });
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInsideMenu =
      this.menuRef?.nativeElement.contains(event.target);
    const clickedToggle =
      this.menuButtonRef?.nativeElement.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      this.isMenuOpen = false;
    }
  }

  isCompaniesActive(): boolean {
    return this.router.url.includes('/companies');
  }

  //
  changeLanguage(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.currentLang = lang;
    this.languageService.setLang(lang);
  }

  //close menu when search
  ngAfterViewInit() {
    if (this.offcanvasNavbar) {
      this.offcanvasInstance = new Offcanvas(this.offcanvasNavbar.nativeElement);
    }
  }

  closeOffcanvas() {
    if (this.offcanvasInstance) {
      this.offcanvasInstance.hide();
    }
  }

  //mobile
  toggleCompanies(event: MouseEvent) {
    event.preventDefault(); // prevent link jump
    this.isCompaniesOpen = !this.isCompaniesOpen;
  }
}
