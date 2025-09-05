// import { Component, inject } from '@angular/core';
// import * as AOS from 'aos';
// import { SharedModule } from '../../shared/shared.module';
// import { NgForm } from '@angular/forms';
// import { LanguageService } from '../../shared/services/language.service';
// import { CompaniesService } from '../../shared/services/companies.service';
// import { CompanyDetails, ICompany } from '../../app.component.models';
// import { ActivitiesService } from '../../shared/services/activities.service';
// import { ToastNotificationComponent } from '../../shared/components/toast-notification/toast-notification.component';

// @Component({
//   selector: 'app-contact-us',
//   standalone: true,
//   imports: [SharedModule, ToastNotificationComponent],
//   templateUrl: './contact-us.component.html',
//   styleUrl: './contact-us.component.css'
// })
// export class ContactUsComponent {
//   //start variables
//   mainColor: string = "#ec1c23";
//   emailo: string = "ceo@uaegroup.ae";
//   landlineNumber: number = +97142570022;
//   faxNumber: number = +97142570033;
//   mobileNumber: number = +971505585881;
//   address: string = "Festival Tower, Dubai UAE"
//   backgroundImage: string = 'assets/images/contact-us.webp';
//   languageService = inject(LanguageService);
//   currentLang: string = "ar"
//   companiesServices = inject(CompaniesService);
//   companies: Array<ICompany> = [];
//   selectedCompany!: ICompany;
//   activitiesService = inject(ActivitiesService);
//   companyDetails!: CompanyDetails;
//   selectedActivity: string = '';
//   propServices = [
//     { id: 1, name: "Buying", nameAr: "شراء" },
//     { id: 2, name: "selling", nameAr: "بيع" },
//     { id: 3, name: "Rent", nameAr: "استئجار" },
//     { id: 4, name: "Leasing", nameAr: "تأجير" },
//     { id: 5, name: "Replacing", nameAr: "استبدال" }
//   ]
//   successMessage = '';
//   errorMessage = '';
//   //end variables

//   ngOnInit(): void {
//     this.languageService.lang$.subscribe(lang => {
//       this.currentLang = lang
//     });
//     this.companies = this.companiesServices.getCompanies();
//   }

//   ngAfterViewInit(): void {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 120,
//     });
//   }

//   submit(contactForm: NgForm): void {
//     console.log(contactForm.value)
//     console.log(contactForm.valid)
//   }

//   onCompanyChange(selectedId: string) {
//     console.log('Selected company ID:', selectedId);
//     const selectedCompany = this.companies.find(c => c.id === +selectedId);

//     if (selectedCompany) {
//       this.selectedCompany = selectedCompany;
//       this.companyDetails = this.activitiesService.getCompanyDetails(selectedId);

//       this.selectedActivity = '';
//     } else {
//       console.warn('Company not found for ID:', selectedId);
//     }
//   }
// }
import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { NgForm } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { CompaniesService } from '../../shared/services/companies.service';
import { CompanyDetails, ICompany } from '../../app.component.models';
import { ActivitiesService } from '../../shared/services/activities.service';
import { ToastNotificationComponent } from '../../shared/components/toast-notification/toast-notification.component';
import { HttpClient } from '@angular/common/http'; // <-- ADD THIS
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModule, ToastNotificationComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  //start variables
  mainColor: string = "#ec1c23";
  emailo: string = "ceo@uaegroup.ae";
  landlineNumber: number = +97142570022;
  faxNumber: number = +97142570033;
  mobileNumber: number = +971505585881;
  address: string = "Festival Tower, Dubai UAE";
  backgroundImage: string = 'assets/images/contact-us.webp';
  languageService = inject(LanguageService);
  currentLang: string = "ar";
  companiesServices = inject(CompaniesService);
  companies: Array<ICompany> = [];
  selectedCompany!: ICompany;
  activitiesService = inject(ActivitiesService);
  companyDetails!: CompanyDetails;
  selectedCompanyId: string = '';
  selectedActivity: string = '';
  selectedPropServiceType: string = '';
  propServices = [
    { id: 1, name: "Buying", nameAr: "شراء" },
    { id: 2, name: "selling", nameAr: "بيع" },
    { id: 3, name: "Rent", nameAr: "استئجار" },
    { id: 4, name: "Leasing", nameAr: "تأجير" },
    { id: 5, name: "Replacing", nameAr: "استبدال" }
  ];
  seoService = inject(SeoService);
  successMessage = '';
  errorMessage = '';
  private http = inject(HttpClient); // <-- ADD THIS
  private webAppUrl: string = 'https://script.google.com/macros/s/AKfycbzh4ZSAkp5Uz4mt02kjAerhoXZd5MpVGPXkB6iWduG3vwNIvGVBgSjEnYqHZ27zhNFN/exec'; // <-- REPLACE WITH YOUR URL
  //end variables

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;

      // Update SEO dynamically based on current language
      this.seoService.setSeo(
        'Contact Us',
        'تواصل معنا',
        'Get in touch with UAE Group. Contact details include office phone, mobile, fax, email, and our Dubai UAE address.',
        'تواصل مع مجموعة يو إيه إي. تشمل تفاصيل الاتصال هاتف المكتب، الهاتف المتحرك، الفاكس، البريد الإلكتروني، وعنواننا في دبي.',
        'UAE Group, Contact, Contact Us, Phone, Mobile, Fax, Email, Address, Dubai, UAE Investment Group',
        'مجموعة يو إيه إي, تواصل معنا, الاتصال, هاتف المكتب, الهاتف المتحرك, فاكس, بريد إلكتروني, العنوان, دبي, مجموعة يو إيه إي للاستثمار',

        this.currentLang
      );
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

  // <-- UPDATED SUBMIT FUNCTION
  submit(contactForm: NgForm): void {
    if (contactForm.invalid) return;

    const formData = contactForm.value;

    // REMOVE propServiceType if company.id is 1 or 3
    if (+this.selectedCompanyId === 1 || +this.selectedCompanyId === 3) {
      formData.propServiceType =
        this.currentLang === 'en'
          ? 'Not Available'
          : 'غير متوفر';
    }

    // --- COMPANY NAME ---
    const selectedCompany = this.companies.find(c => c.id === +formData.company);
    if (selectedCompany) {
      formData.company =
        this.currentLang === 'ar'
          ? selectedCompany.titleAr
          : selectedCompany.title;
    }

    const params = new URLSearchParams(formData as any).toString();
    const url = `${this.webAppUrl}?${params}`;

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (res: string) => {
        this.successMessage = this.currentLang === 'ar'
          ? 'تم إرسال الرسالة بنجاح!'
          : 'Message sent successfully!';
        this.errorMessage = '';
        contactForm.resetForm();
        this.selectedActivity = '';
        this.selectedCompanyId = '';
        this.selectedPropServiceType = '';
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = this.currentLang === 'ar'
          ? 'فشل إرسال الرسالة. حاول مرة أخرى.'
          : 'Failed to send message. Please try again.';
        this.successMessage = '';
      }
    });
  }

  onCompanyChange(selectedId: string) {
    if (!selectedId) return; // <--- ignore empty or invalid IDs

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
