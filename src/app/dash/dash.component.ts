import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ServicesService } from '../services/services.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Service } from '../shared/service.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit, OnDestroy {
  /** Based on the screen size, switch from standard to one column per row */
  services: Service[];
  subscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver,
    private servicesService: ServicesService,
    private dataStorageService: DataStorageService) {}

  ngOnInit()  {
    this.subscription = this.servicesService.servicesChanged.subscribe(
      (services: Service[]) => {
        this.services = services;
      }
    );

    this.dataStorageService.getservices();

  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
