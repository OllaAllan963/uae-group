import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';
import { Modal } from 'bootstrap';
import { PublicContentService } from '../../shared/services/public-content.service';
import { ToastNotificationComponent } from '../../shared/components/toast-notification/toast-notification.component';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';

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
      this.currentLang = lang
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

