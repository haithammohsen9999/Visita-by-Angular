import { Injectable } from '@angular/core';
import { collection, query, where, getDocs, Firestore, doc, docData } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {IOffer} from './../models/IOffer'
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private firestore: Firestore) { }

  getOffers() {
    let offerRef = collection(this.firestore, "Offers")
    return collectionData(offerRef, { idField: "id" }) as Observable<IOffer[]>
  }

  getOffersDetails(id:any) {
    
    let offerRef = doc(this.firestore, "Offers",id)
    return docData(offerRef) as Observable<IOffer>
  }

}

