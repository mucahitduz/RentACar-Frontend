import { CarDetailDto } from '../models/carDetailDto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilterPipe'
})
export class CarFilterPipePipe implements PipeTransform {

  transform(value: CarDetailDto[], carFilter : string): CarDetailDto[] {
    carFilter = carFilter?carFilter.toLocaleLowerCase():"";
    return carFilter?value.filter((c:CarDetailDto)=>c.carName.toLocaleLowerCase().indexOf(carFilter)!==-1):value;
  }

}
