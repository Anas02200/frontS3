import { Component, OnInit, OnDestroy } from '@angular/core';

import {MatTableDataSource} from '@angular/material';
import { reportsService } from 'src/app/shared/report.service';
import { report } from 'src/app/shared/report.model';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-plaintes',
  templateUrl: './plaintes.component.html',
  styleUrls: ['./plaintes.component.css']
})
export class PlaintesComponent implements OnInit,OnDestroy {
  reports: report[];
  subscription: Subscription;
  dataSource: MatTableDataSource<report>;
  constructor(private reportsService:reportsService) { }

  ngOnInit() {
        this.reports=this.reportsService.getreports();
        console.log(this.reports);
        this.dataSource = new MatTableDataSource(this.reports); 

      }
      
    // this.dataSource = new MatTableDataSource(this.reports); 

  

  displayedColumns: string[] = ['user', 'desc', 'date'];
  // dataSource = new MatTableDataSource(this.reports);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
