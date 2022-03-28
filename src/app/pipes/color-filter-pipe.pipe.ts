import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'colorFilterPipe'
})
export class ColorFilterPipePipe implements PipeTransform {

  transform(value: CarDetailDto[], colorFilter : string): CarDetailDto[] {
    colorFilter = colorFilter?colorFilter.toLocaleLowerCase():"";
    return colorFilter?value.filter((c:CarDetailDto)=>c.colorName.toLocaleLowerCase().indexOf(colorFilter)!==-1):value;
  }

}
