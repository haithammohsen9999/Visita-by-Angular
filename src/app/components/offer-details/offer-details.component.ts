import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IOffer } from 'src/app/models/IOffer';
import { OfferService } from 'src/app/services/offer.service';
import { render } from 'creditcardpayments/creditCardPayments';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {
  offersDetails:any= {};
  currentPrice:BehaviorSubject <IOffer>
  
  constructor(private Route:ActivatedRoute,private OffersService:OfferService){
    this.currentPrice = new BehaviorSubject <IOffer>(JSON.parse(localStorage.getItem('Price')!))
  }
  ngOnInit(): void {
    let id = this.Route.snapshot.paramMap.get('id')
    // console.log(id);

    this.OffersService.getOffersDetails(id).subscribe((data)=>{
      this.offersDetails = data;
      localStorage.setItem('Price',JSON.stringify(data));
      this.currentPrice.next(data)
      console.log(data);
      
  })

  render(
    {
        id: "#payments",
        currency: "USD",
        value: `${this.currentPrice.value.Price}`,
        onApprove: (details) => {
          alert("Successfull")
        }
      }
    );

}}
