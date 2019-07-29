import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { APP_CONSTANTS } from './app.constant';

@Component({
  selector: 'ng-real-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentLanguage: string;
  showScrollToTopButton = false;

  @ViewChild('sidenav') public sidenav;
  constructor(
    public translate: TranslateService,
    private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(language => {
      this.currentLanguage = language;
    });
  }
  
  scrollHandler(event): void {
    let currentScrollPosition = document.querySelector("mat-sidenav-content").scrollTop;
    
    if( currentScrollPosition > APP_CONSTANTS.SHOW_SCROLL_TO_TOP_BUTTON_POSITION ) {
      this.showScrollToTopButton = true;
    } else {
      this.showScrollToTopButton = false;
    }
  }

  scrollToTop(event): void {
    document.querySelector("mat-sidenav-content").scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
