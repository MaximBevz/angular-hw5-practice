import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../services/cars.service";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-add-car-from',
  templateUrl: './add-car-from.component.html',
  styleUrls: ['./add-car-from.component.css']
})
export class AddCarFromComponent implements OnInit {

  carAddForm: FormGroup = new FormGroup({
    model: new FormControl(''),
    price: new FormControl(),
    year: new FormControl('')
  });

  constructor(private carService: CarsService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
  }

  save() {
    const newCar = {
      model: this.carAddForm.controls.model.value,
      price: this.carAddForm.controls.price.value,
      year: this.carAddForm.controls.year.value
    };

    this.carService.setCar(newCar).subscribe(value => {
      this.dataTransfer.store.next(value);
    });

  }
}
