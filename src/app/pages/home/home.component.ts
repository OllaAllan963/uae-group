import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { InvestmentPartComponent } from '../../components/investment-part/investment-part.component';
import { PropertiesPartComponent } from '../../components/properties-part/properties-part.component';
import { InvestmentRegisterActivitiesComponent } from '../../components/investment-register-activities/investment-register-activities.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { PropertiesRegisterActivitiesComponent } from '../../components/properties-register-activities/properties-register-activities.component';
import { SharedModule } from '../../shared/shared.module';
import { InvestmentPart2Component } from '../../components/investment-part2/investment-part2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InvestmentPart2Component, PropertiesRegisterActivitiesComponent, CarouselComponent, InvestmentPartComponent, PropertiesPartComponent, InvestmentRegisterActivitiesComponent, WhyChooseUsComponent, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
// features = [
//   { title: 'Strategic Location – Gateway Between <b>Asia, Europe & Africa</b>' },
//   { title: 'Zero Income Tax & <b>100% Foreign Ownership</b> in Key Sectors' },
//   { title: 'World-Class Infrastructure & <b>Free Zone Ecosystems</b>' },
//   { title: '<b>Efficient Import & Export</b> Operations via Major Ports' },
//   { title: 'Strong Legal Framework & <b>Investor-Friendly Policies</b>' },
//   { title: 'Diverse Economy with <b>Non-Oil Growth Potential</b>' },
//   { title: 'Access to Regional Markets with <b>Over 2 Billion Consumers</b>' },
//   { title: '<b>Logistics, Manufacturing & Trade</b> Hub of the Middle East' },
//   { title: 'Stable Currency Pegged to <b>US Dollar</b>' },
//   { title: '<b>Safe & Transparent</b> Business Environment' }
// ];
