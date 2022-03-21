import { CarImage } from "./carImage";

export interface CarDetail{
    carId:number;
    brandId:number;
    colorId:number;
    carName:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    carImage:CarImage[];
}