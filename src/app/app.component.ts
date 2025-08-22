import { Component, inject, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isFullLoading: boolean = true;       // Fullscreen loader for first load
  isSectionLoading: boolean = false;   // Inline loader for route navigation
  private firstLoadDone = false;

  private router = inject(Router);
  private translateService = inject(TranslateService);

    constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // scroll to top on route change
      }
    });
  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('ar');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.firstLoadDone) {
          console.log('➡️ Navigation started');

          // Step 1: show the loader
          this.isSectionLoading = true;

          // Step 2: Wait a tick and THEN run loading logic
          setTimeout(() => {
            this.handleNavigationLoading();
          }, 0);
        }
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        if (!this.firstLoadDone) {
          this.handleInitialLoading();
        }
      }
    });

    // First time load
    this.handleInitialLoading();
  }

  private async handleInitialLoading(): Promise<void> {
    console.log('⏳ First load: waiting 3s + media...');
    const wait3Seconds = new Promise(resolve => setTimeout(resolve, 3000));
    const waitMedia = this.waitForMediaToRender();

    await Promise.all([wait3Seconds, waitMedia]);

    this.isFullLoading = false;
    this.firstLoadDone = true;
    console.log('✅ Initial load complete');
  }

  private async handleNavigationLoading(): Promise<void> {
    console.log('⏳ Navigation: waiting 1s + media...');
    const wait1Seconds = new Promise(resolve => setTimeout(resolve, 1000));
    const waitMedia = this.waitForMediaToRender();

    await Promise.all([wait1Seconds, waitMedia]);

    this.isSectionLoading = false;
    console.log('✅ Navigation complete');
  }

  //   private async handleNavigationLoading(): Promise<void> {
  //   console.log('⏳ Navigation: waiting for media...');

  //   await this.waitForMediaToRender();

  //   this.isSectionLoading = false;
  //   console.log('✅ Navigation complete');
  // }


  private waitForMediaToRender(): Promise<void> {
    return new Promise(resolve => {
      const images = Array.from(document.querySelectorAll('img')) as HTMLImageElement[];
      const videos = Array.from(document.querySelectorAll('video')) as HTMLVideoElement[];

      const total = images.length + videos.length;
      let completed = 0;

      const checkDone = () => {
        completed++;
        if (completed >= total) {
          resolve();
        }
      };

      if (total === 0) {
        resolve();
        return;
      }

      images.forEach(img => {
        if (img.complete) {
          checkDone();
        } else {
          img.onload = img.onerror = checkDone;
        }
      });

      videos.forEach(video => {
        const onPlaying = () => {
          video.removeEventListener('playing', onPlaying);
          checkDone();
        };

        if (!video.paused && !video.ended && video.readyState >= 2) {
          checkDone();
        } else {
          video.addEventListener('playing', onPlaying);
          const playPromise = video.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => { });
          }
        }
      });

      setTimeout(() => {
        resolve();
      }, 15000);
    });
  }
}
