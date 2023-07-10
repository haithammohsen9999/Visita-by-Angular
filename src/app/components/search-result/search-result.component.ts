import { DoctorsService } from 'src/app/services/doctors.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IDoctor } from './../../models/IDoctor';
import { Observable, from, map } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Firestore, Timestamp, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/compat';
// import { MbscDatepicker } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit{
  doctors: IDoctor[]=[]
  doctor!: IDoctor;
  selectedDate!: Date;
  name:string=""
  dateSelected:any
  timeSelected:string=''
  gender: string = '';
  speciality: string=''
  public price!: number;
  public sortBy!: string;
  selectedDates:any
  currentPage = 1;
  itemsPerPage = 3;
  doctorName:string=''
  selectedSpeciality:string=''
  selectedCity:string=''
  public selectedMoment = new Date();

  constructor (private route: ActivatedRoute,private DS: DoctorsService,private firestore: Firestore,private fb: FormBuilder, private router:Router,private http:HttpClient, private firestore2:AngularFirestore,private filterPipe: FilterPipe) {
    this.doctorName=this.DS.sharedName
    this.selectedCity=this.DS.sharedCity
    this.selectedSpeciality=this.DS.sharedSpeciality
    console.log(this.doctorName);
    console.log("SPE",this.selectedSpeciality);
    console.log("city",this.selectedCity);

    // this.DS.getDoctors().subscribe(doctors => {
    //   this.doctors = doctors;
    //   // this.doctor=doctors;
    //   console.log(this.doctors);
    // });

    // this.DS.getDoctor().subscribe(doctors => {
    //   this.doctors = doctors;
    // });
  }



  bookAppointments(doctorName: string,ImgUrl:string,Speciality:string,dateSelected:string,ExaminationFees:string,Location:string,Phone:string,doctorID:string) {
    this.router.navigate(['/bookingForm'], {
      queryParams: {
        doctorName: doctorName,
        ImgUrl:ImgUrl,
        Speciality:Speciality,
        dateSelected:dateSelected,
        ExaminationFees:ExaminationFees,
        Location:Location,
        Phone:Phone,
        doctorID:doctorID

      }
    });
  }










  async ngOnInit() {
    try {
      const doctorsPromise = this.DS.getDoctor(this.doctorName,this.selectedSpeciality,this.selectedCity);
      const doctorsObservable = await doctorsPromise;
      doctorsObservable.subscribe(doctors => {
        this.doctors = doctors;
        console.log(this.doctors);

      });
    } catch (error) {
      console.error(error);
    }
  }



  // ngOnInit(): void {




  //   // this.DS.getDoctor(this.doctorName,this.selectedSpeciality,this.selectedCity).then((doctors) => {
  //   //   this.doctors = doctors;
  //   //   console.log("NNN",this.doctors);

  //   // });


  // }

  updateAppointment(doctor: any, dateSelected: any) {
    this.dateSelected=doctor['dateSelected'] = dateSelected;

  }









  genderMale = false;
  genderFemale=false;
  priceFilterLess300=false;
  priceFilterFrom100to200=false;
  TitleProfessor=false;
  TitleLecturer=false;
  TitleConsultant=false;
  TitleSpecialist=false;
  EntityHospital=false;
  EntityClinic=false;
  anyPriceFilter = false;
  filterDoctors(doctors: IDoctor[]) {
    let filteredDoctors = doctors;

    if (this.genderMale) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.Gender === 'Male');
    }
    if (this.genderFemale) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.Gender === 'Female');
    }
    if (this.TitleProfessor) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.Title === 'Professor');
    }
    if (this.TitleLecturer) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.Title === 'Lecturer');
    }
    if (this.TitleConsultant) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.Title === 'Consultant');
    }
    if (this.TitleSpecialist) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.Title === 'Specialist');
    }
    if (this.EntityHospital) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.Entity === 'Hospital');
    }
    if (this.EntityClinic) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.Entity === 'Clinic');
    }

    if (this.priceFilterLess300) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.ExaminationFees! < 300);
    }
    if (this.priceFilterFrom100to200) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.ExaminationFees! >= 100 && doctor.ExaminationFees! <= 200);
    }

    return filteredDoctors;
  }
  onTitleChecked(title: string) {
    switch(title) {
      case 'Professor':
        this.TitleLecturer = false;
        this.TitleConsultant = false;
        this.TitleSpecialist = false;
        break;
      case 'Lecturer':
        this.TitleProfessor = false;
        this.TitleConsultant = false;
        this.TitleSpecialist = false;
        break;
      case 'Consultant':
        this.TitleProfessor = false;
        this.TitleLecturer = false;
        this.TitleSpecialist = false;
        break;
      case 'Specialist':
        this.TitleProfessor = false;
        this.TitleLecturer = false;
        this.TitleConsultant = false;
        break;
      default:
        break;
    }
  }
  onCheckboxChange(checkboxValue: string) {
    if (checkboxValue === 'female') {
      this.genderMale = false;
    } else if (checkboxValue === 'male') {
      this.genderFemale = false;
    }
  }

  checkAnyPriceFilter() {
    if (this.anyPriceFilter) {
      this.priceFilterLess300 = false;
      this.priceFilterFrom100to200 = false;
    }
  }

  checkPriceFilters(filterType: string) {
    if (filterType === 'less300') {
      if (this.priceFilterLess300) {
        this.anyPriceFilter = false;
        this.priceFilterFrom100to200 = false;
      }
    } else if (filterType === 'from100to200') {
      if (this.priceFilterFrom100to200) {
        this.anyPriceFilter = false;
        this.priceFilterLess300 = false;
      }
    }
  }
  checkEntities(selectedEntity: string) {
    if (selectedEntity === 'hospital') {
      this.EntityClinic = false;
    } else if (selectedEntity === 'clinic') {
      this.EntityHospital = false;
    }
  }

}
