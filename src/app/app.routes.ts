import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { PurposeComponent } from './pages/purpose/purpose.component';
import { CareersComponent } from './pages/careers/careers.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'purpose', component: PurposeComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'companies/:slug', component: CompaniesComponent, },
    { path: '**', component: NotFoundComponent },
];
