import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';
import { CompaniesService } from '../../shared/services/companies.service';
import { ICompany } from '../../app.component.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  mainColor: string = "#ec1c23"
  languageService = inject(LanguageService);
  currentLang: string = "ar"
  tel: number = +97142570022;
  Fax: number = +97142570033;
  Mod: number = +971505585881;
  companiesServices = inject(CompaniesService);
  companies: Array<ICompany> = [];

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
}
