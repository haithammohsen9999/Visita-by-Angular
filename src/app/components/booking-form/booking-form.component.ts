import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { MbscDatepicker, MbscDatepickerOptions, setOptions  } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './../../services/auth.service';
import { User } from '@angular/fire/auth';
import { Observable, map, of, switchMap, take } from 'rxjs';
// setOptions({
//   theme: 'ios',
//   themeVariant: 'light'
// });




@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  doctorName: any;
  ImgUrl: any;
  Speciality:any;
  timeSelected:any
  dateSelected:any
  ExaminationFees:any
  Location:any
  Phone:any
  name: string=''
  mobile: string=''
  email: string=''
  notes: string=''
  doctorID:any
  // bookings$!: Observable<any[]>;
  showModal = false;
status:string='Wait'

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private http: HttpClient,private firestore: AngularFirestore, private afAuth: AngularFireAuth, private authservice:AuthService,
    private router:Router
  ) {




  }

  async addBooking(doctorID: string) {
    try {
      const user = await this.authservice.getFireAuth().authState.pipe(take(1)).toPromise();
      if (!user) {
        console.error('User is not logged in');
        return;
      }

      const bookingRef = await this.firestore.collection('bookings').ref.where('doctorID', '==', doctorID).where('dateSelected', '==', this.dateSelected).get();
      if (bookingRef.docs.length > 0) {
        console.error('Booking already exists for this date and time');
        alert('Booking already exists for this date and time')
        this.showModal = true;
        return;
      }

      const booking = {
        doctorID: doctorID,
        doctor: this.doctorName,
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        notes: this.notes,
        userUid: user.uid,
        dateSelected: this.dateSelected,
        status:this.status


      };

      await this.firestore.collection('bookings').add(booking);
      console.log('Booking added successfully');
      this.router.navigate(['/thanks']);
      // Reset form values
      // this.name = '';
      // this.mobile = '';
      // this.email = '';
      // this.notes = '';
    } catch (error) {
      console.error('Error adding booking: ', error);
    }
    this.bookAppointments(this.doctorName,this.ImgUrl,this.Speciality,this.dateSelected,this.timeSelected,this.ExaminationFees,this.Location,this.Phone,this.name)
  }



  bookAppointments(doctorName: string,ImgUrl:string,Speciality:string,dateSelected:string,timeSelected:string,ExaminationFees:string,Location:string,Phone:string,name:string) {
    this.router.navigate(['/thanks'], {
      queryParams: {
        doctorName: doctorName,
        ImgUrl:ImgUrl,
        Speciality:Speciality,
        dateSelected:dateSelected,
        timeSelected:timeSelected,
        ExaminationFees:ExaminationFees,
        Location:Location,
        Phone:Phone,
        name:name

      }
    });
  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.doctorName = params['doctorName'];
      this.ImgUrl = params['ImgUrl'];
      this.Speciality=params['Speciality'];
      this.dateSelected=params['dateSelected'];
      this.timeSelected=params['timeSelected'];
      this.ExaminationFees=params['ExaminationFees'];
      this.Location=params['Location'];
      this.Phone=params['Phone'];
      this.doctorID=params['doctorID'];
      console.log(this.doctorID);



    });
  }

  //   this.bookings$ = this.getBookings();
  // }
  // getBookings(): Observable<any[]> {


  //   return this.afAuth.authState.pipe(
  //     switchMap(user => {
  //       if (!user) {
  //         console.error('User is not logged in');
  //         return of([]);
  //       }

  //       return this.firestore.collection('bookings', ref => ref.where('userUid', '==', user.uid))
  //         .snapshotChanges()
  //         .pipe(
  //           map(actions =>
  //             actions.map(a => {
  //               const data = a.payload.doc.data() as any;
  //               const id = a.payload.doc.id;
  //               return { id, ...data };
  //             })
  //           )
  //         );
  //     })
  //   );
  // }




}
