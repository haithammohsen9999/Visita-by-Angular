import { Component } from '@angular/core';
// import { MbscDatepickerOptions, setOptions  } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vezeeta';


  // constructor(private http: HttpClient) {}

  // multiple = [
  //     '2023-04-11T00:00',
  //     '2023-04-16T00:00',
  //     '2023-04-17T00:00'
  // ];

  // singleLabels = [];
  // singleInvalid = [];
  // datetimeLabels = [];
  // datetimeInvalid = [];
  // multipleLabels = [];
  // multipleInvalid = [];

  // singleSettings: MbscDatepickerOptions = {
  //     display: 'inline',
  //     controls: ['calendar'],
  //     min: minDate,
  //     max: maxDate,
  //     pages: 'auto',
  //     onPageLoading: (event) => {
  //         this.getPrices(event.firstDay, (bookings: any) => {
  //             this.singleLabels = bookings.labels;
  //             this.singleInvalid = bookings.invalid;
  //         });
  //     }
  // };

  // datetimeSettings: MbscDatepickerOptions = {
  //     display: 'inline',
  //     controls: ['calendar', 'timegrid'],
  //     min: minDate,
  //     max: maxDate,
  //     minTime: '08:00',
  //     maxTime: '19:59',
  //     stepMinute: 60,
  //     width: undefined,
  //     onPageLoading: (event) => {
  //         this.getDatetimes(event.firstDay, (bookings: any) => {
  //             this.datetimeLabels = bookings.labels;
  //             this.datetimeInvalid = bookings.invalid;
  //         });
  //     }
  // };

  // multipleSettings: MbscDatepickerOptions = {
  //     display: 'inline',
  //     controls: ['calendar'],
  //     min: minDate,
  //     max: maxDate,
  //     pages: 'auto',
  //     selectMultiple: true,
  //     onPageLoading: (event) => {
  //         this.getBookings(event.firstDay, (bookings: any) => {
  //             this.multipleLabels = bookings.labels;
  //             this.multipleInvalid = bookings.invalid;
  //         });
  //     }
  // };

  // getPrices(d: Date, callback: any): void {
  //     const myInvalid: any = [];
  //     const myLabels: any = [];
  //     const y = d.getFullYear();
  //     const m = d.getMonth();

  //     this.http.jsonp('https://trial.mobiscroll.com/getprices/?year=' + y + '&month=' + m, 'callback').subscribe((bookings: any) => {
  //         for (const booking of bookings) {
  //             const date = new Date(booking.d);

  //             if (booking.price > 0) {
  //                 myLabels.push({
  //                     start: date,
  //                     title: '$' + booking.price,
  //                     textColor: '#e1528f'
  //                 });
  //             } else {
  //                 myInvalid.push(date);
  //             }
  //         }
  //         callback({ labels: myLabels, invalid: myInvalid });
  //     });
  // }

  // getDatetimes(d: Date, callback: any): void {
  //     let myInvalid: any = [];
  //     const myLabels: any = [];
  //     const y = d.getFullYear();
  //     const m = d.getMonth();

  //     this.http.jsonp('https://trial.mobiscroll.com/getbookingtime/?year=' + y + '&month=' + m, 'callback').subscribe((bookings: any) => {
  //         for (const booking of bookings) {
  //             const date = new Date(booking.d);
  //             if (booking.nr > 0) {
  //                 myLabels.push({
  //                     start: date,
  //                     title: booking.nr + ' SPOTS',
  //                     textColor: '#e1528f'
  //                 });
  //                 myInvalid = [...myInvalid, ...booking.invalid];
  //             } else {
  //                 myInvalid.push(date);
  //             }
  //         }
  //         callback({ labels: myLabels, invalid: myInvalid });
  //     });
  // }

  // getBookings(d: Date, callback: any): void {
  //     const myInvalid: any = [];
  //     const myLabels: any = [];
  //     const y = d.getFullYear();
  //     const m = d.getMonth();

  //     this.http.jsonp('https://trial.mobiscroll.com/getbookings/?year=' + y + '&month=' + m, 'callback').subscribe((bookings: any) => {
  //         for (const booking of bookings) {
  //             const date = new Date(booking.d);
  //             if (booking.nr > 0) {
  //                 myLabels.push({
  //                     start: date,
  //                     title: booking.nr + ' SPOTS',
  //                     textColor: '#e1528f'
  //                 });
  //             } else {
  //                 myInvalid.push(date);
  //             }
  //         }
  //         callback({ labels: myLabels, invalid: myInvalid });
  //     });
  // }

}
