import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thanks-submit',
  templateUrl: './thanks-submit.component.html',
  styleUrls: ['./thanks-submit.component.scss']
})
export class ThanksSubmitComponent  implements OnInit{
  Location: any;
  ExaminationFees: any;
  Phone: any;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.doctorName = params['doctorName'];
      this.ImgUrl = params['ImgUrl'];
      this.Speciality=params['Speciality'];
      this.dateSelected=params['dateSelected'];
      this.timeSelected=params['timeSelected'];
      this.ExaminationFees=params['ExaminationFees'];
      this.Location=params['Location'];
      this.Phone=params['Phone'];
      this.name=params['name']

      console.log('Initializing component with doctorName:', this.doctorName);
    });
  }
  doctorName: any;
  ImgUrl: any;
  Speciality:any;
  timeSelected:any
  dateSelected:any
  name: string=''
  mobile: string=''
  email: string=''
  notes: string=''
}
