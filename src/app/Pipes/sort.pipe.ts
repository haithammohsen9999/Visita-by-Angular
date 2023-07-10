import { Pipe, PipeTransform } from '@angular/core';
import { IDoctor } from '../models/IDoctor';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(doctors: IDoctor[], sortBy: string): IDoctor[] {
    if (!doctors || !sortBy) {
      return doctors;
    }

    return doctors.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
}
