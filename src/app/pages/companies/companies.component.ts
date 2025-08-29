import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { CompanyDetails, ICompany, Property } from '../../app.component.models';
import { ActivitiesService } from '../../shared/services/activities.service';
import { CompaniesService } from '../../shared/services/companies.service';
import { PropertiesService } from '../../shared/services/properties.service';
import { LanguageService } from '../../shared/services/language.service';
import { SharedModule } from '../../shared/shared.module';
import { PublicContentService } from '../../shared/services/public-content.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})

export class CompaniesComponent {
  //start variables
  @ViewChild('myVideo') myVideoRef!: ElementRef<HTMLVideoElement>;
  mainColor: string = "#ec1c23"
  id!: string;
  activitiesService = inject(ActivitiesService);
  companiesService = inject(CompaniesService);
  companyDetails!: CompanyDetails;
  uaeC!: ICompany;
  backgroundImage: string = '/assets/images/companies/companies.jpg';
  propertiesService = inject(PropertiesService);
  properties: Array<Property> = [];
  publicContentService = inject(PublicContentService);
  stats: Array<any> = [];
  invExcellence: Array<any> = [];
  languageService = inject(LanguageService);
  currentLang: string = "ar";
  //end variables

  // constructor(private router: Router) {
  //   this.id = this.router.getCurrentNavigation()?.extras.state?.['id'];
  //   console.log('Hidden ID:', this.id);
  // }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.id = history.state?.id;

      if (this.id != null) {
        this.companyDetails = this.activitiesService.getCompanyDetails(this.id);
        this.uaeC = this.companiesService.getCompany(this.id);
        this.backgroundImage = this.uaeC.image
        console.log(this.companyDetails);

        if (this.id == '2') {
          this.properties = this.propertiesService.getProperties()
        }

        // Ensure video is reloaded
        setTimeout(() => {
          this.reloadVideo();
        });
      } else {
        console.error('ID not found in state');
      }

      this.stats = this.publicContentService.getPropStats();
      this.invExcellence = this.publicContentService.getInvExcellence();
    });
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }

  openedIndex: number | null = null;

  togglePanel(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  reloadVideo(): void {
    if (this.myVideoRef && this.myVideoRef.nativeElement) {
      this.myVideoRef.nativeElement.load();
    }
  }
}
