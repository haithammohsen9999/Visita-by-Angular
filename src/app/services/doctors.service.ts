import { IDoctor } from './../models/IDoctor';
import { collection, query, where, getDocs, Firestore, QuerySnapshot, CollectionReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, from, map, of } from 'rxjs';
import { AngularFirestore, Query, QueryFn } from '@angular/fire/compat/firestore';
interface Doctor extends IDoctor {
  id: string;
}
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctors: IDoctor[] = []
   doctorList: IDoctor[] = [];
   sharedName: string=''
   sharedSpeciality:string=''
   sharedCity:string=''
  constructor(private firestore: Firestore,fs:AngularFirestore) {}
  // getDoctorsByCriteria(specialty?: string, city?: string, name?: string): Observable<IDoctor[]> {
  //   let query: FirebaseFirestore.Query = this.firestore.collection('doctors');

  //   // Build the query based on the selected criteria
  //   if (specialty && city && name) {
  //     query = query.where('specialty', '==', specialty).where('city', '==', city).where('name', '==', name);
  //   } else if (specialty && city) {
  //     query = query.where('specialty', '==', specialty).where('city', '==', city);
  //   } else if (specialty && name) {
  //     query = query.where('specialty', '==', specialty).where('name', '==', name);
  //   } else if (city && name) {
  //     query = query.where('city', '==', city).where('name', '==', name);
  //   } else if (specialty) {
  //     query = query.where('specialty', '==', specialty);
  //   } else if (city) {
  //     query = query.where('city', '==', city);
  //   } else if (name) {
  //     query = query.where('name', '==', name);
  //   } else {
  //     // No criteria provided, return all doctors
  //     query = query;
  //   }

  //   // Execute the query and return the results as an observable
  //   return new Observable<IDoctor[]>(subscriber => {
  //     query.get().then((querySnapshot: QuerySnapshot) => {
  //       const doctors: IDoctor[] = [];
  //       querySnapshot.forEach((doc: FirebaseFirestore.QueryDocumentSnapshot) => {
  //         const data = doc.data() as IDoctor;
  //         const id = doc.id;
  //         doctors.push({ id, ...data });
  //       });
  //       subscriber.next(doctors);
  //     }).catch((error) => {
  //       subscriber.error(error);
  //     });
  //   });
  // }
  // async getDoctorsByCriteria( name: string): Promise<IDoctor[]> {
  //   const doctorRef = collection(this.firestore, 'Doctor');

  //   let queryRef: any = doctorRef;
  //   // if (specialty) {
  //   //   queryRef = queryRef.where('Speciality', '==', specialty);
  //   // }
  //   // if (city) {
  //   //   queryRef = queryRef.where('City', '==', city);
  //   // }
  //   if (name) {
  //     queryRef = queryRef.where('Name', '==', name);
  //   }

  //   const querySnapshot = await getDocs(queryRef);
  //   const doctors: IDoctor[] = [];
  //   querySnapshot.forEach(doc => {
  //     doctors.push(doc.data() as IDoctor);
  //   });
  //   return doctors;
  // }


  setDoctors(doctors: IDoctor[]) {
    this.doctors = doctors;
  }

  // getDoctors() {
  //   let doctorRef = collection(this.firestore, "Doctor")
  //   return collectionData(doctorRef, { idField: "id" }) as Observable<IDoctor[]>
  // }
  getDoctors(): Observable<IDoctor[]> {
    const doctorRef = collection(this.firestore, "Doctor");
    return collectionData(doctorRef, { idField: "id" }) as Observable<IDoctor[]>;
  }
  // private doctorsSubject: BehaviorSubject<IDoctor[]> = new BehaviorSubject<IDoctor[]>([]);
  // public doctors$: Observable<IDoctor[]> = this.doctorsSubject.asObservable();

  // // rest of your code...

  // private setDoctors(doctors: IDoctor[]) {
  //   this.doctorsSubject.next(doctors);
  // }

  // // call this method in getDoctor() after you've fetched the doctors
  //  updateDoctors() {
  //   this.setDoctors(this.doctors);
  // }
  async getDoctor(name?: any, specialityId?: string, cityId?: string): Promise<Observable<IDoctor[]>>{
    let doctorRef = collection(this.firestore, "Doctor");
    let q: any = query(doctorRef);

    if (name) {
      q = query(q, where('Name', '==', name));
    }

    if (specialityId) {
      q = query(q, where('Speciality', '==', specialityId));
    }

    if (cityId) {
      q = query(q, where('City', '==', cityId));
    }

    const querySnapshot = await getDocs(q);
    const doctors: IDoctor[] = [];
    querySnapshot.forEach((doc) => {
      const doctor = doc.data() as IDoctor;
      doctor.id = doc.id;
      doctors.push(doctor);
    });

    return of(doctors);
  }

  // getDoctorObservable(name?: any, specialityId?: any, cityId?: any): Observable<IDoctor[]> {
  //   return from(this.getDoctor(name, specialityId, cityId));
  // }

  // getDoctors2(name?: any, specialityId?: any, cityId?: any): Observable<IDoctor[]> {
  //   let doctorRef = collection(this.firestore, 'Doctor');
  //   let q: any = query(doctorRef);

  //   if (name) {
  //     q = query(q, where('Name', '==', name));
  //   }

  //   if (specialityId) {
  //     q = query(q, where('Speciality', '==', specialityId));
  //   }

  //   if (cityId) {
  //     q = query(q, where('City', '==', cityId));
  //   }

  //   return collectionData(q, { idField: 'id' }) as Observable<IDoctor[]>;
  // }



  getDoctorByGender(genders: string[]): Observable<IDoctor[]> {
    let doctorRef = collection(this.firestore, "Doctor");
    const q = query(doctorRef, where("Gender", "in", genders));
    return collectionData(q, { idField: "id" }) as Observable<IDoctor[]>;

}
getDoctorByPriceLessThan300(): Observable<IDoctor[]> {
  let doctorRef = collection(this.firestore, "Doctor");
  const q = query(doctorRef, where("ExaminationFees", "<", 300));

  return collectionData(q, { idField: "id" }) as Observable<IDoctor[]>;
}


}
