import { DoctorsService } from './../../services/doctors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-doctor',
  templateUrl: './sign-in-doctor.component.html',
  styleUrls: ['./sign-in-doctor.component.scss']
})
export class SignInDoctorComponent implements OnInit{
  constructor(private DS:DoctorsService){}

  ngOnInit(){
    this.DS.getDoctor('Ahmed');
    // console.log(supplier);
    
  }
}
