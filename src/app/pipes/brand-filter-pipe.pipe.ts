import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'brandFilterPipe'
})
export class BrandFilterPipePipe implements PipeTransform {

  transform(value: CarDetailDto[], brandFilter: string): CarDetailDto[] {
    brandFilter = brandFilter?brandFilter.toLocaleLowerCase():"";
    return brandFilter?value.filter((c:CarDetailDto)=>c.brandName.toLocaleLowerCase().indexOf(brandFilter)!==-1):value;
  }

}
