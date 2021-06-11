import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Car from "../models/car";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private url = 'http://92.253.239.109/api/v1/cars';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url);
  }

  setCar(car: Car):Observable<Car> {
    return this.httpClient.post<Car>(this.url, car);
  }
}
