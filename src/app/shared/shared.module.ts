import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../environments/environment';
import { MaterialModule } from './material.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory( httpClient: HttpClient ): TranslateHttpLoader {
  return new TranslateHttpLoader( httpClient, '../assets/i18n/', '.json?cacheBuster=' + environment.cacheBusterHash );
}

@NgModule( {
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    TranslateModule.forRoot( {
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    } )
  ],
  declarations: [],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    TranslateModule
  ]
} )

export class SharedModule {
}
