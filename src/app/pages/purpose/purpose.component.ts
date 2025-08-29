import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';
import { PublicContentService } from '../../shared/services/public-content.service';

@Component({
  selector: 'app-purpose',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './purpose.component.html',
  styleUrl: './purpose.component.css'
})
export class PurposeComponent {
  //start variables
  mainColor: string = "#ec1c23"
  languageService = inject(LanguageService);
  publicContentService = inject(PublicContentService);
  ouePurpose: Array<any> = [];
  currentLang: string = "ar"
  backgroundImage: string = 'assets/images/purpose.webp';
  imageUrl: string = "assets/images/purpose4.webp"
  //end variables

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

    this.ouePurpose = this.publicContentService.getOurPurpose();
  }
}
