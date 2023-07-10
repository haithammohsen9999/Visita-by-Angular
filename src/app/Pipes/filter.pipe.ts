import { Pipe, PipeTransform } from '@angular/core';
import { IDoctor } from '../models/IDoctor';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(doctors: IDoctor[], selectedGender: string, maxPriceFilter: boolean,maxPriceFilter2:boolean): IDoctor[] {
  //   let filteredDoctors: IDoctor[] = doctors;

  //   // Filter by gender
  //   if (selectedGender) {
  //     filteredDoctors = filteredDoctors.filter((doctor) => {
  //       const doctorGender = doctor.Gender ? doctor.Gender.toString().toLowerCase() : '';
  //       const selectedGenderLower = selectedGender.toLowerCase();
  //       return doctorGender === selectedGenderLower;
  //     });
  //   }


  //   // Filter by max price
  //   if (maxPriceFilter) {
  //     filteredDoctors = filteredDoctors.filter((doctor) => doctor.ExaminationFees! <= 300);
  //   }
  //   if (maxPriceFilter2) {
  //     filteredDoctors = filteredDoctors.filter((doctor) => doctor.ExaminationFees! == 350);
  //   }

  //   return filteredDoctors;
  // }
  transform(doctors: IDoctor[], gender: string, price: number): any[] {
    if (!doctors) return [];
    if (!gender && !price) return doctors;

    return doctors.filter(doctor => {
      let matches = true;
      if (gender && doctor.Gender !== gender) {
        matches = false;
      }
      if (price && doctor.ExaminationFees! > price) {
        matches = false;
      }
      return matches;
    });
  }


}
