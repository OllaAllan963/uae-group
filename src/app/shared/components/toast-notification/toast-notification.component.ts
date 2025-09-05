import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toast-notification',
  standalone: true,
  imports: [NgIf, NgClass, NgStyle],
  templateUrl: './toast-notification.component.html',
  styleUrl: './toast-notification.component.css',
})
export class ToastNotificationComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
  @Input() duration: number = 5000;
  languageService = inject(LanguageService);
  currentLang: string = "ar"

  @Output() closed = new EventEmitter<void>();

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang
    });
  }

  ngOnChanges() {
    if (this.message) {
      setTimeout(() => {
        this.closed.emit();
      }, this.duration);
    }
  }

  manualClose() {
    this.closed.emit();
  }
}
