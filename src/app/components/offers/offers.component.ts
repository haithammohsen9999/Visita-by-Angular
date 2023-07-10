import { Component, OnInit } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IOffer } from 'src/app/models/IOffer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers:IOffer[]= [];

  constructor(private OffersService:OfferService,private router:Router){

  }
  ngOnInit(): void {
    
    this.OffersService.getOffers().subscribe((data)=>{
      this.offers = data;
      
    })
    console.log(this.OffersService.getOffers());
    
  }

  goToDetails(id:any){
    this.router.navigate(['OfferDetails',id])

    console.log(id);
    
  }
}
