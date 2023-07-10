import { Injectable } from '@angular/core';
import { collection, query, where, getDocs, Firestore } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {ICity} from './../models/ICity';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  cities: ICity[] = []
constructor(private firestore: Firestore) { }

getCity() {
  let cityRef = collection(this.firestore, "City")
  return collectionData(cityRef, { idField: "id" }) as Observable<ICity[]>
}

}
