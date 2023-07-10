import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-doctor',
  templateUrl: './sign-up-doctor.component.html',
  styleUrls: ['./sign-up-doctor.component.scss']
})
export class SignUpDoctorComponent {



  constructor(private auth :AuthService,private firestore: AngularFirestore){}
  Title!: string;
  Name!: string;
  gender!: string;
  entity!: string;
  speciality!: string;
  city!: string;
  street!: string;
  building!: string;//
  clinicNumber!: string;
  email!: string;
  password!: any;
  examFee!: number;
  about!: string;
  imageUrl!:string
  status:string='Active'
  isDoctor:boolean=true
  isAdmin:boolean=false


async addDoctor() {
  const Doctor = {

    Name:this.Name,
    City: this.city,
    ImgUrl: this.imageUrl,
    Phone: this.clinicNumber,
    Speciality:this.speciality ,
    Location: this.street,
    ExaminationFees: this.examFee,
    Gender:this.gender,
    Entity:this.entity,
    Title:this.Title

    };
// this.auth.register(this.email,this.password,false,'Active',true)
try{
await this.firestore.collection('Doctor').add(Doctor);
      console.log('Doctor added successfully');
      // this.router.navigate(['/thanks']);

    } catch (error) {
      console.error('Error adding Doctor: ', error);
    }
}
AddDoctor() {
  const Doctor = {

    Name:this.Name,
    City: this.city,
    ImgUrl: this.imageUrl,
    Phone: this.clinicNumber,
    Speciality:this.speciality ,
    Location: this.street,
    ExaminationFees: this.examFee,
    Gender:this.gender,
    Entity:this.entity,
    Title:this.Title,
    About:this.about

    };



    this.firestore.collection('Doctor').add(Doctor)
      .then(() => {
        console.log('Question added');

      })

      .catch((error) => {
        console.error('Error adding question: ', error);
      });
    // this.router.navigate(['/QuestionSubmitted']);

   this.auth.register(this.email,this.password,this.isDoctor,this.status)
  }


}


