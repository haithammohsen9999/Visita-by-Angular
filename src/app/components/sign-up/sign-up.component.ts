import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent  implements OnInit{

  email:string='';
  password:string ='';
  name:string ='';
  gender:string ='';
  birthDate:string='';
  mobileNumber:string='';
  isAdmin=false;
  status='Active'



  constructor(private auth:AuthService){}
  register(){


    if (this.email==''){
    alert('please enter email')
    return;
    }

    if (this.password==''){
    alert('please enter password')
    return;
    }

    if (this.name==''){
    alert('please enter password')
    return;
    }
    if (this.gender==''){
    alert('please enter password')
    return;
    }
    if (this.birthDate==''){
    alert('please enter password')
    return;
    }
    if (this.mobileNumber==''){
    alert('please enter password')
    return;
    }


    this.auth.register(this.email,this.password, this.isAdmin,this.status);
    this.email='';
    this.password='';
    this.name='';
    this.gender='';
    this.birthDate=''
    this.mobileNumber='';
    this.isAdmin=false;
    this.status





  }




  ngOnInit(): void {

  }



}
