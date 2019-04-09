import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../shared/service.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { ArtisanNoP } from '../shared/artisan.model';
import { artisansService } from '../artisan/artisan.service';
import { AuthServService } from '../shared/auth-serv.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  subscription: Subscription;
  services: Service[];
  artisans: ArtisanNoP[];

  constructor(private servicesService:ServicesService,
    private artisansService: artisansService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService,
    private auth:AuthServService,
    ) { }

  ngOnInit() {
    let token=this.auth.Jwt;
    this.auth.loadToken();
    console.log(token);
    //services
    this.subscription = this.servicesService.servicesChanged.subscribe(
      (services: Service[]) => {
        this.services = services;
      }
    );

    this.dataStorageService.getservices();
    
  }

  onCheckService(service:Service,index:number){
    
  }

  


}
