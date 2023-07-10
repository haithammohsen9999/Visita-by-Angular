import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  email:string='';
  password:string ='';

  constructor(private auth:AuthService){}
  login(){


    if (this.email==''){
    alert('please enter email')
    return;
    }

    if (this.password==''){
    alert('please enter password')
    return;
    }


    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';



  }


}
