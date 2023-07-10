import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore/firebase';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private fireStore:Firestore) { }

}
