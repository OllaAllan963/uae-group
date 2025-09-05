import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';
import { Modal } from 'bootstrap';
import { PublicContentService } from '../../shared/services/public-content.service';
import { ToastNotificationComponent } from '../../shared/components/toast-notification/toast-notification.component';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [SharedModule, ToastNotificationComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  //start variables
  mainColor: string = "#ec1c23"
  languageService = inject(LanguageService);
  publicContentService = inject(PublicContentService);
  jobs: Array<any> = [];
  currentLang: string = "ar"
  backgroundImage: string = 'assets/images/career.webp';
  searchText: string = '';
  selectedJob: any = null;
  successMessage = '';
  errorMessage = '';
  selectedFileName: string | null = null;
  seoService = inject(SeoService);
  //end variables

  constructor(private translate: TranslateService) { }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
      this.seoService.setSeo(
        'Our Careers',
        'وظائفنا',
        'Explore career opportunities at UAE Group and join our team. Positions include investment, property, IT, marketing, and other roles. Submit your CV to be considered for upcoming opportunities.',
        'استكشف فرص العمل في مجموعة يو إيه إي وانضم إلى فريقنا. تشمل الوظائف الاستثمارية، العقارية، تكنولوجيا المعلومات، التسويق، وغيرها. أرسل سيرتك الذاتية للنظر فيها للفرص القادمة.',
        'UAE Group, Careers, Jobs, Employment, Investment Analyst, Business Development Executive, Investment Research Associate, Property Sales Consultant, Property Consultant Assistant, Real Estate Marketing Officer, System Administrator, Network Engineer, Digital Marketing Specialist, Apply, Join Our Team, UAE Jobs',
        'مجموعة يو إيه إي, وظائفنا, فرص العمل, انضم إلى الفريق, محلل استثماري, تنفيذي تطوير الأعمال, مساعد أبحاث استثمارية, مستشار مبيعات عقارية, مساعد مستشار عقاري, مسؤول تسويق عقاري, مسؤول أنظمة, مهندس شبكات, أخصائي تسويق رقمي, قدم طلبك, الإمارات, فرص وظيفية',
        this.currentLang
      );
    });

    this.jobs = this.publicContentService.getOurJobsOpportunities();
  }

  // formData = {
  //   fullName: '',
  //   email: '',
  //   coverLetter: '',
  //   resume: null as File | null
  // };

  formData: any = {
    fullName: '',
    email: '',
    coverLetter: '',
    resume: null
  };

  openApplyModal(job: any) {
    this.selectedJob = job;
    this.formData = { fullName: '', email: '', coverLetter: '', resume: null };

    const modalEl = document.getElementById('applyModal');
    if (modalEl) {
      const modal = new Modal(modalEl);
      modal.show();
    }
  }

  onFileChange(event: Event, resumeInput: any) {
    const input = event.target as HTMLInputElement;
    const file: File | null = input.files?.[0] ?? null;

    resumeInput.control.markAsTouched();
    resumeInput.control.markAsDirty();

    if (!file) {
      this.formData.resume = null;
      return;
    }

    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!validTypes.includes(file.type)) {
      this.translate.get('errors.INVALID_FILE_TYPE').subscribe((res: string) => {
        this.errorMessage = res;
      });
      input.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.translate.get('errors.FILE_TOO_LARGE').subscribe((res: string) => {
        this.errorMessage = res;
      });
      input.value = '';
      return;
    }

    this.errorMessage = '';
    this.formData.resume = file;
  }


  submitApplication(careerForm: NgForm) {
    if (!this.formData.fullName || !this.formData.email || !this.formData.coverLetter || !this.formData.resume) {
      this.translate.get('errors.COMPLETE_ALL_FIELDS').subscribe((res: string) => {
        this.errorMessage = res;
      });

      return;
    }

    this.errorMessage = ''; // clear error
    this.translate.get('success.APPLICATION_SUBMITTED').subscribe((res: string) => {
      this.successMessage = res;
    });

    const submittedData = { ...this.formData };
    console.log('Submitted:', submittedData);

    // Reset the form controls and validation state
    careerForm.resetForm();

    // Optional: clear success message after delay
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);

    // Clear error message too
    this.errorMessage = '';

    const modalEl = document.getElementById('applyModal');
    if (modalEl) {
      const modal = Modal.getInstance(modalEl);
      modal?.hide();
    }
  }

  cancelFun(careerForm: NgForm) {
    careerForm.resetForm();
  }

  filteredJobs() {
    if (!this.searchText.trim()) {
      return this.jobs;
    }

    const search = this.searchText.toLowerCase();

    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(search) ||
      job.titleAr.toLowerCase().includes(search) ||
      job.description.toLowerCase().includes(search) ||
      job.descriptionAr.toLowerCase().includes(search)
    );
  }
}



// import { Component, inject } from '@angular/core';
// import * as AOS from 'aos';
// import { SharedModule } from '../../shared/shared.module';
// import { LanguageService } from '../../shared/services/language.service';
// import { Modal } from 'bootstrap';
// import { PublicContentService } from '../../shared/services/public-content.service';
// import { ToastNotificationComponent } from '../../shared/components/toast-notification/toast-notification.component';
// import { TranslateService } from '@ngx-translate/core';
// import { NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-careers',
//   standalone: true,
//   imports: [SharedModule, ToastNotificationComponent],
//   templateUrl: './careers.component.html',
//   styleUrls: ['./careers.component.css']
// })
// export class CareersComponent {
//   mainColor: string = "#ec1c23";
//   languageService = inject(LanguageService);
//   publicContentService = inject(PublicContentService);
//   jobs: Array<any> = [];
//   currentLang: string = "ar";
//   backgroundImage: string = 'assets/images/career.webp';
//   searchText: string = '';
//   selectedJob: any = null;
//   successMessage = '';
//   errorMessage = '';

//   backendUrl: string = 'https://script.google.com/macros/s/AKfycbxgm3-uPIcrY_ovQ6EfIvjpLcCxhF3X0c_wQugtAk1E7w5RJapcU1S2EawV1mJOj_5e/exec';

//   formData: any = {
//     fullName: '',
//     email: '',
//     coverLetter: '',
//     resume: null
//   };

//   constructor(private translate: TranslateService, private http: HttpClient) { }

//   ngAfterViewInit(): void {
//     AOS.init({ duration: 1000, once: true, offset: 120 });
//   }

//   ngOnInit(): void {
//     this.languageService.lang$.subscribe(lang => this.currentLang = lang);
//     this.jobs = this.publicContentService.getOurJobsOpportunities();
//   }

//   openApplyModal(job: any) {
//     this.selectedJob = job;
//     this.formData = { fullName: '', email: '', coverLetter: '', resume: null };

//     const modalEl = document.getElementById('applyModal');
//     if (modalEl) {
//       const modal = new Modal(modalEl);
//       modal.show();
//     }
//   }

//    onFileChange(event: Event, resumeInput: any) {
//     const input = event.target as HTMLInputElement;
//     const file: File | null = input.files?.[0] ?? null;

//     resumeInput.control.markAsTouched();
//     resumeInput.control.markAsDirty();

//     if (!file) {
//       this.formData.resume = null;
//       return;
//     }

//     const validTypes = [
//       'application/pdf',
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//     ];

//     if (!validTypes.includes(file.type)) {
//       this.translate.get('errors.INVALID_FILE_TYPE').subscribe(res => this.errorMessage = res);
//       input.value = '';
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       this.translate.get('errors.FILE_TOO_LARGE').subscribe(res => this.errorMessage = res);
//       input.value = '';
//       return;
//     }

//     this.errorMessage = '';
//     this.formData.resume = file;
//   }


//   submitApplication(careerForm: NgForm) {
//     if (!this.formData.fullName || !this.formData.email || !this.formData.coverLetter || !this.formData.resume) {
//       this.translate.get('errors.COMPLETE_ALL_FIELDS').subscribe(res => this.errorMessage = res);
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = () => {
//       const base64File = reader.result as string; // data:application/pdf;base64,...

//       const fd = new FormData();
//       fd.append('fullName', this.formData.fullName);
//       fd.append('email', this.formData.email);
//       fd.append('coverLetter', this.formData.coverLetter);
//       fd.append('jobTitle', this.selectedJob ? (this.currentLang === 'en' ? this.selectedJob.title : this.selectedJob.titleAr) : '');
//       fd.append('file', base64File);
//       fd.append('fileName', this.formData.resume?.name || 'resume');
// console.log(fd)
//       this.http.post(this.backendUrl, fd).subscribe({
//         next: () => {
//           console.log(fd)
//           this.translate.get('success.APPLICATION_SUBMITTED').subscribe(resText => this.successMessage = resText);
//           careerForm.resetForm();
//           this.formData.resume = null;

//           const modalEl = document.getElementById('applyModal');
//           if (modalEl) Modal.getInstance(modalEl)?.hide();

//           setTimeout(() => this.successMessage = '', 3000);
//         },
//         error: () => {
//           this.translate.get('errors.SUBMISSION_FAILED').subscribe(res => this.errorMessage = res);
//         }
//       });
//     };
//     reader.readAsDataURL(this.formData.resume);
//   }

//   cancelFun(careerForm: NgForm) {
//     careerForm.resetForm();
//     this.formData.resume = null;
//     this.errorMessage = '';
//   }

//   filteredJobs() {
//     if (!this.searchText.trim()) return this.jobs;

//     const search = this.searchText.toLowerCase();
//     return this.jobs.filter(job =>
//       job.title.toLowerCase().includes(search) ||
//       job.titleAr.toLowerCase().includes(search) ||
//       job.description.toLowerCase().includes(search) ||
//       job.descriptionAr.toLowerCase().includes(search)
//     );
//   }
// }
