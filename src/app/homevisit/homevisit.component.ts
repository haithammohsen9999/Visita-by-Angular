import { Component, Renderer2 } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-homevisit',
  templateUrl: './homevisit.component.html',
  styleUrls: ['./homevisit.component.scss']
})
export class HomevisitComponent {
  appointmentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    preferredDate: new FormControl('', Validators.required),
    preferredTime: new FormControl('', Validators.required),
    medicalSpeciality: new FormControl('', Validators.required),
    notes: new FormControl('')
  });

  constructor(private firestore: AngularFirestore , private modalService: NgbModal , private renderer: Renderer2, private formBuilder: FormBuilder

    ,private router: Router ) {}

  onSubmit() {
    if (this.appointmentForm.valid) {
      const formData = this.appointmentForm.value;
      this.firestore.collection('homevisits').add(formData)
        .then(() => {
          console.log('Form data saved successfully!');
          // this.appointmentForm.reset();
          this.router.navigate(['/QuestionSubmitted']);
        })
        .catch((error) => {
          console.error('Error saving form data: ', error);
        });
    }

  }

}
