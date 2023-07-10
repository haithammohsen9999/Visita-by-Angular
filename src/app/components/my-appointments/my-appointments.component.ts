import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, switchMap, of, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss']
})
export class MyAppointmentsComponent implements OnInit{

  constructor(



    private http: HttpClient,private firestore: AngularFirestore, private afAuth: AngularFireAuth, private authservice:AuthService,
    private router:Router
  ) {



}
bookings$!: Observable<any[]>;


ngOnInit(): void {
  this.bookings$ = this.getBookings();
  }

  getBookings(): Observable<any[]> {


    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (!user) {
          console.error('User is not logged in');
          return of([]);
        }

        return this.firestore.collection('bookings', ref => ref.where('userUid', '==', user.uid))
          .snapshotChanges()
          .pipe(
            map(actions =>
              actions.map(a => {
                const data = a.payload.doc.data() as any;
                const id = a.payload.doc.id;
                return { id, ...data };
              })
            )
          );
      })
    );
  }

}
