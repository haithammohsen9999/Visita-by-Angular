import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookings$!: Observable<Booking[]>;

  constructor(private db: AngularFireDatabase) {}

  // Add a new booking to the database
  addBooking(doctorId: string, patientId: string, bookingDate: Date, notes?: string) {
    const bookingsRef = this.db.list('/bookings');
    const newBooking = {
      doctorId: doctorId,
      patientId: patientId,
      bookingDate: bookingDate.toISOString(),
      notes: notes || '',
      bookingId: ''
    };
    const bookingId = bookingsRef.push(newBooking).key?? '';
    newBooking.bookingId = bookingId;
    return bookingsRef.update(bookingId, newBooking);
  }

  // Retrieve a list of all bookings from the database
  getBookings() {
    return this.db.list('/bookings').valueChanges();
  }

  // Retrieve a list of bookings for a specific doctor
  getBookingsByDoctorId(doctorId: string) {
    return this.db.list('/bookings', ref => ref.orderByChild('doctorId').equalTo(doctorId)).valueChanges();
  }

  // Retrieve a single booking by ID from the database
  // getBookingById(bookingId: string) {
  //   return this.db.object('/bookings/' + bookingId).valueChanges();
  // }

  // Update an existing booking in the database
  updateBooking(bookingId: string, doctorId: string, patientId: string, bookingDate: Date, notes?: string) {
    const bookingRef = this.db.object('/bookings/' + bookingId);
    const updatedBooking = {
      doctorId: doctorId,
      patientId: patientId,
      bookingDate: bookingDate.toISOString(),
      notes: notes || ''
    };
    return bookingRef.update(updatedBooking);
  }

  // Delete an existing booking from the database
  deleteBooking(bookingId: string) {
    const bookingRef = this.db.object('/bookings/' + bookingId);
    return bookingRef.remove();
  }
}
