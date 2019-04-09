import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from '../shared/service.model';
import { Subscription } from 'rxjs';
import { ServicesService } from '../services/services.service';
import { DataStorageService } from '../shared/data-storage.service';
import { artisansService } from '../artisan/artisan.service';
import { clientsService } from '../client/client.service';
import { Artisan, ArtisanNoP } from '../shared/artisan.model';
import { Client, ClientNoP } from '../shared/client.model';
import { AuthServService } from '../shared/auth-serv.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  
  services: Service[];
  artisans: ArtisanNoP[];
  clients: ClientNoP[];
  subscription: Subscription;

  constructor(
    private servicesService: ServicesService, 
    private artisansService: artisansService,
    private clientsService: clientsService,
    private dataStorageService: DataStorageService,
    private auth:AuthServService) {}


    ngOnInit()  {
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
      
      //artisans
      this.subscription = this.artisansService.artisansnoPChanged.subscribe(
        (artisans: ArtisanNoP[]) => {
          this.artisans = artisans;
        }
      );
  
      this.dataStorageService.getArtisans();

      //clients
      this.subscription = this.clientsService.clientsNoPChanged.subscribe(
        (clients: ClientNoP[]) => {
          this.clients = clients;
        }
      );
  
      this.dataStorageService.getClients(token);
  
    }

    onDeleteArti(artisan: ArtisanNoP, index: number) {
      // this.dataStorageService.deleteArtisan(+artisan.id);
      this.artisansService.deleteartisanNoP(index);
    }
    onCheckArti() {

    }

    onDeleteClient(client: ClientNoP, index: number) {
      // this.dataStorageService.deleteClient(+client.id);
      this.clientsService.deleteclientNoP(index);
    }
    onCheckClient() {
      
    }

    onDeleteService(service: Service, index:number) {
      // this.dataStorageService.deleteService(+service.id);
      this.servicesService.deleteservice(index);
    }
    onCheckService() {

    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
