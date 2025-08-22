import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { CompaniesService } from '../../shared/services/companies.service';
import { ICompany } from '../../app.component.models';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-properties-part',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './properties-part.component.html',
  styleUrl: './properties-part.component.css'
})
export class PropertiesPartComponent {
  //start variables
  companiesService = inject(CompaniesService);
  uaeInternationalPropertyC!: ICompany;
  mainColor: string = "#ec1c23"
  currentLang: string = "ar"
  languageService = inject(LanguageService);
  //end variables

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
    this.uaeInternationalPropertyC = this.companiesService.getCompany('2');
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }
}
