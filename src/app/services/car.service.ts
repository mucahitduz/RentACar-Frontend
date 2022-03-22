import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';
import { CarDetail } from '../models/carDetail';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:2786/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl + "cars/getcarsbybrand?id=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl + "cars/getcarsbycolor?id=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetails(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
