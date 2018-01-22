import { Component, OnInit } from '@angular/core';
import { MatInput, MatButton } from '@angular/material';
import { GarageService } from '../garage.service';
import { Garage } from '../../models/Garage';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  garage: Garage = {
    name: '',
    address: '',
    cellnumber: ''

  };

  constructor(private garageService: GarageService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.garage.name !== '' && this.garage.address !== '' && this.garage.cellnumber !== '') {
      this.garageService.addGarage(this.garage);
      this.garage.name = '';
      this.garage.address = '';
      this.garage.cellnumber = '';
    }
  }

}
