import { Component, OnInit } from '@angular/core';
import { MatInput, MatButton, MatCard, MatFormField, MatOption } from '@angular/material';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatSelect } from '@angular/material/select';
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
    cellnumber: '',
    type: ''
  };

  constructor(private garageService: GarageService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.garage.name !== '' && this.garage.address !== '' && this.garage.cellnumber !== '' && this.garage.name !== '') {
      this.garageService.addGarage(this.garage);
      this.garage.name = '';
      this.garage.address = '';
      this.garage.cellnumber = '';
      this.garage.type = '';
    }
  }

}
