import { Car } from './../models/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:2786/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(id: number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl + "cars/getcarsbybrand?id=" + id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(id: number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl + "cars/getcarsbycolor?id=" + id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
