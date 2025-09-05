// seo.service.ts
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  /**
   * Set title, description, and keywords for English or Arabic
   * Accepts a string for lang and internally defaults to 'en' if unknown
   */
  setSeo(
    titleEn: string,
    titleAr: string,
    descriptionEn: string,
    descriptionAr: string,
    keywordsEn: string,
    keywordsAr: string,
    lang: string = 'en' // string type allowed
  ) {
    // Only accept 'ar', otherwise default to 'en'
    const finalLang = lang === 'ar' ? 'ar' : 'en';

    const finalTitle = finalLang === 'ar' ? titleAr : titleEn;
    const finalDescription = finalLang === 'ar' ? descriptionAr : descriptionEn;
    const finalKeywords = finalLang === 'ar' ? keywordsAr : keywordsEn;

    // Set title
    this.title.setTitle(finalTitle);

    // Set meta description
    this.meta.updateTag({ name: 'description', content: finalDescription });

    // Set meta keywords
    this.meta.updateTag({ name: 'keywords', content: finalKeywords });

    // Optional: Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: finalTitle });
    this.meta.updateTag({ property: 'og:description', content: finalDescription });
  }
}
