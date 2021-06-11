import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import Car from "../../models/car";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-cars-catalog',
  templateUrl: './cars-catalog.component.html',
  styleUrls: ['./cars-catalog.component.css']
})
export class CarsCatalogComponent implements OnInit {

  cars: Car[];
  constructor(private carsService: CarsService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
    this.dataTransfer.store.subscribe(value => {
      this.carsService.getCars().subscribe(cars => {
        this.cars = cars;
      });
    })
  }

}
