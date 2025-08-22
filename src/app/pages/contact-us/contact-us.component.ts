import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { NgForm } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { CompaniesService } from '../../shared/services/companies.service';
import { CompanyDetails, ICompany } from '../../app.component.models';
import { ActivitiesService } from '../../shared/services/activities.service';
import { ToastNotificationComponent } from '../../shared/components/toast-notification/toast-notification.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModule, ToastNotificationComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  //start variables
  mainColor: string = "#ec1c23";
  emailo: string = "ceo@uaegroup.ae";
  landlineNumber: number = +97142570022;
  faxNumber: number = +97142570033;
  mobileNumber: number = +971505585881;
  address: string = "Festival Tower, Dubai UAE"
  backgroundImage: string = 'assets/images/contact-us.webp';
  languageService = inject(LanguageService);
  currentLang: string = "ar"
  companiesServices = inject(CompaniesService);
  companies: Array<ICompany> = [];
  selectedCompany!: ICompany;
  activitiesService = inject(ActivitiesService);
  companyDetails!: CompanyDetails;
  selectedActivity: string = '';
  propServices = [
    { id: 1, name: "Buying", nameAr: "شراء" },
    { id: 2, name: "selling", nameAr: "بيع" },
    { id: 3, name: "Rent", nameAr: "استئجار" },
    { id: 4, name: "Leasing", nameAr: "تأجير" },
    { id: 5, name: "Replacing", nameAr: "استبدال" }
  ]
  successMessage = '';
  errorMessage = '';
  //end variables

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
    this.companies = this.companiesServices.getCompanies();
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }

  submit(contactForm: NgForm): void {
    console.log(contactForm.value)
    console.log(contactForm.valid)
  }

  onCompanyChange(selectedId: string) {
    console.log('Selected company ID:', selectedId);
    const selectedCompany = this.companies.find(c => c.id === +selectedId);

    if (selectedCompany) {
      this.selectedCompany = selectedCompany;
      this.companyDetails = this.activitiesService.getCompanyDetails(selectedId);

      this.selectedActivity = '';
    } else {
      console.warn('Company not found for ID:', selectedId);
    }
  }
}
