import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'ng-real-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentLanguage: string;

  @ViewChild('sidenav') public sidenav;
  constructor(
    public translate: TranslateService,
    private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}
