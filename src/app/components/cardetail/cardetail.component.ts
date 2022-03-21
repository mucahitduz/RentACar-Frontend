import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { CarImage } from './../../models/carImage';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {
 car:Car[]=[];
 carImages:CarImage[];
 carId:number;
 imgUrl:string="http://localhost:2786/Images/"

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.carId=(params["carId"]);
        this.getCarDetails(params["carId"])
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.car=response.data;
      this.carImages=this.car[0].carImage;
    })
  }

  getCurrentImageClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }
}
