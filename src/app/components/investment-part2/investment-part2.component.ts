import { Component, inject } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-investment-part2',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './investment-part2.component.html',
  styleUrl: './investment-part2.component.css'
})
export class InvestmentPart2Component {
  //start variables
  mainColor: string = "#ec1c23"
  currentLang: string = "ar"
  languageService = inject(LanguageService);
  img1:string="assets/images/inv2.webp";
  img2:string="assets/images/inv.webp"
  //end variables

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }
}
