// language.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('ar');
  lang$ = this.currentLangSubject.asObservable();

  setLang(lang: string) {
    this.currentLangSubject.next(lang);
  }

  getLang(): string {
    return this.currentLangSubject.getValue();
  }
}
