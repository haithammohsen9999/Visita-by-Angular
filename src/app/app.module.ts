import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignInDoctorComponent } from './components/sign-in-doctor/sign-in-doctor.component';
import { SignUpDoctorComponent } from './components/sign-up-doctor/sign-up-doctor.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { provideAuth,getAuth, EmailAuthProvider } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './services/auth.service';



import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { MbscModule } from '@mobiscroll/angular/';

import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {MatInputModule} from '@angular/material/input';


import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { OffersComponent } from './components/offers/offers.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ThanksSubmitComponent } from './components/thanks-submit/thanks-submit.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';

// import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'; // Replace with the correct import statement for the datetime picker library you are using

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HomevisitComponent } from './homevisit/homevisit.component';
import { TeleconsultationComponent } from './teleconsultation/teleconsultation.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { MedicalQuestionComponent } from './medical-question/medical-question.component';
import { QuestionSubmittedComponent } from './components/question-submitted/question-submitted.component';

export function httpTranslateLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignInDoctorComponent,
    SignUpDoctorComponent,
    OffersComponent,
    SignUpComponent,
    SignInComponent,
    OfferDetailsComponent,
    SearchResultComponent,
    BookingFormComponent,
    ThanksSubmitComponent,
    MyAppointmentsComponent,
    FilterPipe,
    SortPipe,
    HomevisitComponent,
    TeleconsultationComponent,
    MedicalQuestionComponent,
    QuestionSubmittedComponent,






  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgModule,

    NgxPaginationModule,

    // DlDateTimeDateModule,
    // DlDateTimePickerModule,
    // FormsModule,
    // ReactiveFormsModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,

    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase,)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),

    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatInputModule,
    CommonModule,
    MatAutocompleteModule,
    CarouselModule,
    provideDatabase(() => getDatabase()),

     HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoaderFactory,
        deps:[HttpClient]
      }
    })


    // FontAwesomeModule,

  ],
  providers: [FilterPipe,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
