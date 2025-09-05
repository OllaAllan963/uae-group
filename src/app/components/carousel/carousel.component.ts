import {
  Component,
  ElementRef,
  inject,
  ViewChildren,
  QueryList,
  ViewChild
} from '@angular/core';
import { CompaniesService } from '../../shared/services/companies.service';
import { SharedModule } from '../../shared/shared.module';
import { ICompany } from '../../app.component.models';
import { Router } from '@angular/router';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {
  // //start variables
  companiesServices = inject(CompaniesService);
  companies: Array<ICompany> = [];
  @ViewChild('thumbnailContainer') thumbnailContainer!: ElementRef;
  currentLang: string = "ar"
  languageService = inject(LanguageService);
  // //end variables

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
    this.companies = this.companiesServices.getCompanies();
  }

  goToCompany(company: ICompany): void {
    console.log(company.id)
    const slug = company.title.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['companies', slug], {
      state: { id: company.id }
    });
  }


  itemActive = 0;
  intervalId: any;

  @ViewChildren('thumbnailRef') thumbnails!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }

  next(): void {
    this.itemActive = (this.itemActive + 1) % this.companies.length;
    this.showSlider();
  }

  prev(): void {
    this.itemActive = (this.itemActive - 1 + this.companies.length) % this.companies.length;
    this.showSlider();
  }

  select(index: number): void {
    this.itemActive = index;
    this.showSlider();
  }

  private showSlider(): void {
    this.scrollThumbnailIntoView();
    this.restartAutoSlide();
  }

  private scrollThumbnailIntoView(): void {
    const activeThumb = this.thumbnails.get(this.itemActive);
    const container = this.thumbnailContainer?.nativeElement;
    const thumb = activeThumb?.nativeElement;

    if (container && thumb) {
      const containerRect = container.getBoundingClientRect();
      const thumbRect = thumb.getBoundingClientRect();

      const offsetLeft = thumb.offsetLeft - container.offsetLeft;
      const scrollLeft = offsetLeft - (container.clientWidth / 2) + (thumb.clientWidth / 2);

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }


  private startAutoSlide(): void {
    this.intervalId = setInterval(() => this.next(), 5000);
  }

  private restartAutoSlide(): void {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }
}
