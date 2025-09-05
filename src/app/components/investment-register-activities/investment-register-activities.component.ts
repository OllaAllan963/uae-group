import { Component, AfterViewInit, ElementRef, ViewChild, inject, OnDestroy } from '@angular/core';
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
  styleUrls: ['./investment-register-activities.component.css']
})
export class InvestmentRegisterActivitiesComponent implements AfterViewInit, OnDestroy {
  // services
  activitiesService = inject(ActivitiesService);
  languageService = inject(LanguageService);

  // variables
  uaeInvestmentDevelopmentCActs!: CompanyDetails;
  mainColor: string = "#ec1c23";
  currentLang: string = "ar";

  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  // drag vars
  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  // auto scroll
  private autoScrollInterval: any;

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
    this.uaeInvestmentDevelopmentCActs = this.activitiesService.getCompanyDetails('1');
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });

    this.enableDragScroll();
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoScrollInterval);
  }

  /** Enable drag + touch scroll */
  private enableDragScroll() {
    const track = this.container.nativeElement as HTMLElement;

    // mouse
    track.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDown = true;
      track.classList.add('active');
      this.startX = e.pageX - track.offsetLeft;
      this.scrollLeft = track.scrollLeft;
      this.stopAutoScroll();
    });

    track.addEventListener('mouseleave', () => {
      this.isDown = false;
      track.classList.remove('active');
      this.startAutoScroll();
    });

    track.addEventListener('mouseup', () => {
      this.isDown = false;
      track.classList.remove('active');
      this.startAutoScroll();
    });

    track.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - this.startX) * 1.5;
      track.scrollLeft = this.scrollLeft - walk;
    });

    // touch
    track.addEventListener('touchstart', (e: TouchEvent) => {
      this.isDown = true;
      this.startX = e.touches[0].pageX - track.offsetLeft;
      this.scrollLeft = track.scrollLeft;
      this.stopAutoScroll();
    });

    track.addEventListener('touchend', () => {
      this.isDown = false;
      this.startAutoScroll();
    });

    track.addEventListener('touchmove', (e: TouchEvent) => {
      if (!this.isDown) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - this.startX) * 1.5;
      track.scrollLeft = this.scrollLeft - walk;
    });
  }

  /** Auto scrolls to the right */
  private startAutoScroll() {
    const track = this.container.nativeElement as HTMLElement;
    clearInterval(this.autoScrollInterval);

    this.autoScrollInterval = setInterval(() => {
      track.scrollLeft += 1; // speed (px per tick)
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
        track.scrollLeft = 0; // loop back to start
      }
    }, 20); // interval (lower = smoother)
  }

  private stopAutoScroll() {
    clearInterval(this.autoScrollInterval);
  }
}
