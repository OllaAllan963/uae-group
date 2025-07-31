import { Component, AfterViewInit, ElementRef, ViewChild, inject } from '@angular/core';
import * as AOS from 'aos';
import { ActivitiesService } from '../../shared/services/activities.service';
import { CompanyDetails } from '../../app.component.models';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-investment-register-activities',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './investment-register-activities.component.html',
  styleUrl: './investment-register-activities.component.css'
})
export class InvestmentRegisterActivitiesComponent implements AfterViewInit {
  //start variables
  activitiesService = inject(ActivitiesService);
  uaeInvestmentDevelopmentCActs!: CompanyDetails;
  mainColor: string = "#ec1c23"
  currentLang: string = "ar"
  languageService = inject(LanguageService);
  //end variables

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
    this.uaeInvestmentDevelopmentCActs = this.activitiesService.getCompanyDetails('1');
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });

    this.duplicateCarouselItems();
  }


  @ViewChild('carousel') carousel!: ElementRef;


  duplicateCarouselItems() {
    const carousel = this.carousel.nativeElement;
    carousel.innerHTML += carousel.innerHTML; // duplicate items for infinite effect
  }

  pauseScroll() {
    this.carousel.nativeElement.style.animationPlayState = 'paused';
  }

  resumeScroll() {
    this.carousel.nativeElement.style.animationPlayState = 'running';
  }
}
