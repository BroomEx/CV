import { Component, computed, signal } from '@angular/core';
import { translations } from './translations';

export type Language = 'en' | 'cs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly lang = signal<Language>('en');
  readonly t = computed(() => translations[this.lang()]);

  setLang(newLang: Language) {
    this.lang.set(newLang);
  }
}
