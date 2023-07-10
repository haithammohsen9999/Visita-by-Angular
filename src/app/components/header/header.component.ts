import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedState: boolean | undefined;
  currentLang:string | undefined;
  userLogged: boolean | undefined;

  constructor(private AuthService:AuthService,public translateservice:TranslateService) {
    this.userLogged=this.AuthService.userLoggedState;
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translateservice.use(this.currentLang)
  }

  changeCurrentLang(lang:string){
    this.translateservice.use(lang)
    localStorage.setItem('currentLang',lang)
  }
  
  ngOnInit(): void {
    this.AuthService.getLoggedStatus().subscribe((loggedIn: boolean) => {
      this.userLogged = loggedIn;
    });
  }


      onLogout(){
        this.AuthService.logout()
    }


    switchLanguage() {
      const lang = document.documentElement.lang;
      if (lang === 'en') {
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.lang = 'en';
      }
      location.reload();
    }

}
