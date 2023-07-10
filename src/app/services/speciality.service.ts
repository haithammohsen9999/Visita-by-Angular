import { Injectable } from '@angular/core';
import { collection, query, where, getDocs, Firestore } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ISpeciality } from '../models/ISpeciality';
@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private firestore: Firestore) { }

  getSpecilaty() {
    let specialityRef = collection(this.firestore, "Speciality")
    return collectionData(specialityRef, { idField: "id" }) as Observable<ISpeciality[]>
  }
}
