import { Component, OnInit } from '@angular/core';
import { GarageService } from '../garage.service';
import { Garage } from '../../models/Garage';
import { MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  garages: Garage[];
  dataSource: any;
  displayedColumns = ['name', 'address', 'cellnumber', 'type'];

  constructor(private garageService: GarageService) {
   }

  ngOnInit() {
    this.showData();
  }

  showData() {
    this.garageService.getGarage().subscribe(garages => {
      this.garages = garages;
      this.dataSource = new MatTableDataSource(this.garages);
      console.log(this.dataSource);
    });
  }
}
