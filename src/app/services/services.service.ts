
import { Injectable } from "@angular/core";


import { Subject } from "rxjs";
import { Service } from "../shared/service.model";
import { Http } from "@angular/http";

@Injectable()
export class ServicesService{
    servicesChanged= new Subject<Service[]>();
    http: Http;
    
    private services: Service[] = [

      ];

    constructor(){}

    setservices(services: Service[]) {
        this.services=services;
        this.servicesChanged.next(this.services.slice());
    }


    getservices() {
        return this.services.slice();
    }

    getServicesBack() {

    }

    getservice(id:number) {
        return this.services.slice()[id];
    }


    addservice(service :Service) {
        this.services.push(service);
        this.servicesChanged.next(this.services.slice());
    }

    updateservice(index: number, newservice: Service) {
        this.services[index] = newservice;
        this.servicesChanged.next(this.services.slice());
    }

    deleteservice(index: number) {
        this.services.splice(index, 1);
        this.servicesChanged.next(this.services.slice());
    }

}   