import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { ActivitiesService } from '../../shared/services/activities.service';
import { CompanyDetails } from '../../app.component.models';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-properties-register-activities',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './properties-register-activities.component.html',
  styleUrl: './properties-register-activities.component.css'
})
export class PropertiesRegisterActivitiesComponent {
  //start variables
  activitiesService = inject(ActivitiesService);
  uaeInternationalPropertyCActs!: CompanyDetails;
  mainColor: string = "#ec1c23"
  currentLang: string = "ar"
  languageService = inject(LanguageService);
  //end variables

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
    this.uaeInternationalPropertyCActs = this.activitiesService.getCompanyDetails('2');
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }
}
