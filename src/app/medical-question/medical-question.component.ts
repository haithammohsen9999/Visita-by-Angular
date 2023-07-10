import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-medical-question',
  templateUrl: './medical-question.component.html',
  styleUrls: ['./medical-question.component.scss']
})
export class MedicalQuestionComponent {

  constructor(private firestore: AngularFirestore, private router: Router, private AuthService: AuthService) {
    this.userLogged = this.AuthService.userLoggedState;
  }
  question: string = '';
  speciality: string = '';
  age: number = 0;
  gender: string = '';
  forr: string = '';
  details: string = '';
  userLoggedState: boolean | undefined;
  userLogged: boolean | undefined;

  submitQuestion(question: string, speciality: string, age: number, gender: string, details: string, forr: string) {

    if (!question || !speciality || !age || !gender || !details || !forr) {
      alert('Please fill in all the fields');
      return;
    }

    if (this.userLogged) {
      this.firestore.collection('Questions').add({
        question,
        speciality,
        age,
        gender,
        details,
        forr,
      })
        .then(() => {
          console.log('Question added');

        })

        .catch((error) => {
          console.error('Error adding question: ', error);
        });
      this.router.navigate(['/QuestionSubmitted']);
    } else {
      this.router.navigate(['/signIn']);
    }


  }

  ngOnInit(): void {
    this.AuthService.getLoggedStatus().subscribe((loggedIn: boolean) => {
      this.userLogged = loggedIn;
    });
  }

  onLogout() {
    this.AuthService.logout()
  }

}
