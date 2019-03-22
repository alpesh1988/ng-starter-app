import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONSTANTS } from '../app.constant';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'real-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidebarClick  = new EventEmitter<boolean>();
  currentUserFirstname: string = 'Real';
  availableLanguages: Array<Object>;
  currentLanguage: string;
  currentLanguageFlag: string;

  constructor(
    public translate: TranslateService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.availableLanguages = APP_CONSTANTS.AVAILABLE_LANGUAGES;
    // get default language
    const defaultLanguageObject = APP_CONSTANTS.AVAILABLE_LANGUAGES
        .filter(availableLanguageObject => availableLanguageObject.default === true)[0],
      /* get localstorage value
        If no value set, then take default language  */
      localLanguage = localStorage.getItem(APP_CONSTANTS.REAL_CURRENT_LANGUAGE) || defaultLanguageObject.COUNTRY_CODE,
      /* get default language object as per localstorage value
      If no value set, then take default language  */
      localLanguageObject = APP_CONSTANTS.AVAILABLE_LANGUAGES
        .filter(availableLanguageObject => availableLanguageObject.COUNTRY_CODE === localLanguage)[0];
    // if values does not match to available language, then set default
    !localLanguageObject ? this.setCurrentLanguage(defaultLanguageObject) : this.setCurrentLanguage(localLanguageObject);
  }

  openSidebar(): void {
    this.sidebarClick.emit();
  }

  onLogout(): void {
    localStorage.removeItem(APP_CONSTANTS.REAL_CURRENT_LANGUAGE);
  }

  setCurrentLanguage(language): void {
    this.currentLanguage = language.COUNTRY_NAME;
    this.currentLanguageFlag = language.COUNTRY_FLAG_ICON_CLASSNAME;
    this.translate.use(language.COUNTRY_CODE);
    this.translate.currentLang = language.COUNTRY_CODE;
    this.languageService.changeLanguage(language.COUNTRY_CODE.toUpperCase());
    localStorage.setItem(APP_CONSTANTS.REAL_CURRENT_LANGUAGE, language.COUNTRY_CODE);
  }

}
