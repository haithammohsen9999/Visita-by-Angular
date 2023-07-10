import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';
import { PrivacyPolicyComponent } from './components/privacyPolicy/privacyPolicy.component';
import { SignInDoctorComponent } from './components/sign-in-doctor/sign-in-doctor.component';
import { SignUpDoctorComponent } from './components/sign-up-doctor/sign-up-doctor.component';
import { OffersComponent } from './components/offers/offers.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ThanksSubmitComponent } from './components/thanks-submit/thanks-submit.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';
import { HomevisitComponent } from './homevisit/homevisit.component';
import { MedicalQuestionComponent } from './medical-question/medical-question.component';
import { QuestionSubmittedComponent } from './components/question-submitted/question-submitted.component';

const routes: Routes = [

  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component: HomeComponent,canActivate:[AuthGuardGuard]},
  {path: 'ContactUs',component: ContactUsComponent ,canActivate:[AuthGuardGuard]},
  {path: 'PrivatePolicy',component: PrivacyPolicyComponent,canActivate:[AuthGuardGuard] },
  {path: 'SignInDoctor', component:SignInDoctorComponent,canActivate:[AuthGuardGuard]},
  {path:'SignUpDoctor', component: SignUpDoctorComponent,canActivate:[AuthGuardGuard]},
  {path: 'searchResult', component:SearchResultComponent,canActivate:[AuthGuardGuard]},
   {path:'Offers',component:OffersComponent,canActivate:[AuthGuardGuard]},
   {path:'SignUp',component:SignUpComponent},
   {path:'signIn',component:SignInComponent},
   {path:'bookingForm',component:BookingFormComponent},
   {path:'thanks',component:ThanksSubmitComponent},
   {path:'myAppointments',component:MyAppointmentsComponent},
   {path:'OfferDetails/:id',component:OfferDetailsComponent,canActivate:[AuthGuardGuard]},
   {path:'homevisit',component:HomevisitComponent,canActivate:[AuthGuardGuard]},
   {path:'Question',component:MedicalQuestionComponent},
   {path:'QuestionSubmitted',component:QuestionSubmittedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
