import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ServicesService } from '../services.service';
import { Service } from 'src/app/shared/service.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit,OnDestroy,OnChanges {
  services: Service[];
  subscription: Subscription;


  constructor( private servicesService: ServicesService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  ngOnChanges() {
    this.dataStorageService.getservices();
  }

  ngOnInit() {
    this.subscription=this.servicesService.servicesChanged.subscribe(
      (services: Service[]) => {
        this.services=services;  
      }
    );

    this.dataStorageService.getservices();
    
    console.log(this.services);
  }

  ngOnDestroy()  {
    this.subscription.unsubscribe();
  }


}
