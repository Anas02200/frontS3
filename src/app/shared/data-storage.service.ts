import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams, RequestOptions  } from '@angular/http';
import 'rxjs/Rx';
import { ServicesService } from '../services/services.service';
import { Service, ServiceUpd } from './service.model';
import { Artisan, ArtisanLogin, ArtisanNoP } from './artisan.model';
import { artisansService } from '../artisan/artisan.service';
import { Client, ClientLogin, ClientNoP } from './client.model';
import { clientsService } from '../client/client.service';
import { AdminserviceService } from '../admin/adminservice.service';
import { Admin, AdminLogin } from './admin.model';

import { AuthServService } from './auth-serv.service';
import { HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Headers } from '@angular/http'



@Injectable()
export class DataStorageService {
  
  private customersUrl = 'http://localhost:8888/service';
  constructor(private http: Http,
     private servicesService: ServicesService,
     private artisansService: artisansService,
     private clientsService: clientsService,
     private adminsService:AdminserviceService
    ) {}

  storeservices() {//dafuck??

  }

  getservices() {
    
    return this.http.get("http://localhost:8888/services")
    .map(
        (response: Response) => {
            console.log(response);
            const  services: any = response.json()['_embedded']['services'];
            
            let servicesB: Service[] =  [];
          for(let serviceEl of services){
            console.log(serviceEl.id);
            let id= serviceEl.id;
            let name= serviceEl.typeService;
            let desc=serviceEl.serviceDescription;
            let imgUrl=serviceEl.imgUrl;
            let serviceItem=new Service(id,name,desc,imgUrl);
            servicesB.push(serviceItem);


          }

          return servicesB;
        }
      )
      .subscribe(
        (services: Service[]) => {
            console.log(services);
          this.servicesService.setservices(services);
        }
      );
    }
  
  
  addService(service:Service)  {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', service.name);
    urlSearchParams.append('desc', service.desc);
    urlSearchParams.append('imgUrl', service.imgUrl);
    this.http.post("http://localhost:8888/service/addService",urlSearchParams)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }

  deleteService(index:number) {
    const url = "${this.customersUrl}/${index}";
    return this.http.delete("http://localhost:8888/service/delete"+'/'+ index)    .subscribe(
      data => {
          console.log("Delete Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  deleteServiceByName(name:string) {
    const url = "${this.customersUrl}/${index}";
    return this.http.delete("http://localhost:8888/service/delete"+'/'+name)    .subscribe(
      data => {
          console.log("Delete Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }

  findService(name:string){
    this.http.get("http://localhost:8888/service/findServiceByName"+"/"+name)
    .map(
        (response: Response) => {
          const  services: Service[] = response.json();

          return services;
        }
      )
      .subscribe(
        (services: Service[]) => {
            console.log(services);
          this.servicesService.setservices(services);
        }
      );
  }
  updateService(name:string,service:ServiceUpd){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('desc', service.desc);
    urlSearchParams.append('name', name);
    urlSearchParams.append('newName',service.name);
   
    this.http.put("http://localhost:8888/service/updateService",urlSearchParams)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });

  }

  //////artisans crud
  getArtisans() {
    this.http.get("http://localhost:8888/artisan/allArtisans")
    .map(
        (response: Response) => {
          const  artisans: any = response.json();
          console.log(artisans);
          let artisansB: ArtisanNoP [] =  [];
          for(let artisanEl of artisans){
            let id=artisanEl.id;
            let name= artisanEl.name;
            let email=artisanEl.email;
            let phone=artisanEl.phone;
            let service=artisanEl.service;
            let address=artisanEl.adress;
            let artisanItem=new ArtisanNoP(id,name,email,phone,address,service);
            artisansB.push(artisanItem);
    
        }
        return artisansB;
        }
      )
      .subscribe(
        (artisans: ArtisanNoP[]) => {
            console.log(artisans);
          this.artisansService.setartisansnoP(artisans);
        }
      );
    }
  
  addArtisan(artisan:ArtisanLogin)  {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('adresse', artisan.adress);
    urlSearchParams.append('email', artisan.email);
    urlSearchParams.append('name', artisan.name);
    urlSearchParams.append('phone', artisan.phone);
    urlSearchParams.append('password', artisan.password);
    urlSearchParams.append('Cpassword',artisan.Cpassword);
    urlSearchParams.append('serviceName',artisan.service);
    this.http.post("http://localhost:8888/artisan/addArtisan",urlSearchParams)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }

  deleteArtisan(index:number) {
    const url = "${this.customersUrl}/${index}";
    return this.http.delete("http://localhost:8888/artisan/delete"+'/'+ index)    .subscribe(
      data => {
          console.log("Delete Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  deleteArtisanByName(name:string) {
    const url = "${this.customersUrl}/${index}";
    return this.http.delete("http://localhost:8888/artisan/delete"+'/'+name)    .subscribe(
      data => {
          console.log("Delete Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  getArtisanByName(name:string) {
    const url = "${this.customersUrl}/${index}";

    this.http.get("http://localhost:8888/artisan/findArtisanByName"+'/'+name).
    map(
        (response:Response)=> {
            const artisanIn:any =response.json();
            console.log(response.json());
            let id= artisanIn.id;
            let name= artisanIn.name;
            let email=artisanIn.email;
            let phone=artisanIn.phone;
            let address=artisanIn.adresse;
            let service=artisanIn.service;
            console.log(id,name,email,phone,address);
            let artisan:ArtisanNoP =new ArtisanNoP(id,name,email,phone,address,service);
            console.log(artisan);
            return artisan;
        }
        
    )  
    .subscribe(
        (artisan: ArtisanNoP) => {
            console.log(artisan);
          this.artisansService.setCurrentArtisan(artisan);
          
        });
  }
  findArtisan(name:string){
    this.http.get("http://localhost:8888/artisan/findArtisanByName"+"/"+name)
    .map(
        (response: Response) => {
          const  artisans: Artisan[] = response.json();

          return artisans;
        }
      )
      .subscribe(
        (artisans: Artisan[]) => {
            console.log(artisans);
          this.artisansService.setartisans(artisans);
        }
      );

  }
  findArtisanByService(name:string){
    
    this.http.get("http://localhost:8888/artisan/findArtisanByService"+"/"+name)
    .map(
      (response: Response) => {
        const  artisans: any = response.json();
        console.log(artisans);
        let artisansB: ArtisanNoP [] =  [];
        for(let artisanEl of artisans){
          let id=artisanEl.id;
          let name= artisanEl.name;
          let email=artisanEl.email;
          let phone=artisanEl.phone;
          let service=artisanEl.service;
          let address=artisanEl.adress;
          let artisanItem=new ArtisanNoP(id,name,email,phone,address,service);
          artisansB.push(artisanItem);
  
      }
      return artisansB;
      }
    )
    .subscribe(
      (artisans: ArtisanNoP[]) => {
          console.log(artisans);
        this.artisansService.setartisansnoP(artisans);
      }
    );
  }
  updateArtisan(name:string,artisan:Artisan){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('adresse', artisan.adress);
    urlSearchParams.append('email', artisan.email);
    urlSearchParams.append('name', name);
    urlSearchParams.append('phone', artisan.phone);
    urlSearchParams.append('password', artisan.password);
    urlSearchParams.append('newName',artisan.name);
   
    this.http.put("http://localhost:8888/artisan/updateArtisan",urlSearchParams)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });

  }




  //client crud services
  getClients(token) {
    let h:Headers=new Headers({ "Authorization": token});
    let _options=new RequestOptions({headers:h})
    this.http.get("http://localhost:8888/client/allClients",_options)
    .map(
        (response: Response) => {
            const  clients: any = response.json();
            console.log(clients);
            let clientsB: ClientNoP [] =  [];
            for(let clientEl of clients){
              let id= clientEl.id;
              let name= clientEl.name;
              let email=clientEl.email;
              let phone=clientEl.phone;
              
              let clientItem=new ClientNoP(id,name,email,phone);
              clientsB.push(clientItem);
      
          }
          return clientsB;
          }
      )
      .subscribe(
        (clients: ClientNoP[]) => {
            console.log(clients);
          this.clientsService.setclientsNoP(clients);
        }
      );
    }
  
  addClient(client:ClientLogin)  {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', client.email);
    urlSearchParams.append('name', client.name);
    urlSearchParams.append('phone', client.phone);
    urlSearchParams.append('password', client.password);
    urlSearchParams.append('Cpassword', client.password);

    this.http.post("http://localhost:8888/client/addClient",urlSearchParams)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  deleteClientByName(name:string) {
    const url = "${this.customersUrl}/${index}";
    return this.http.delete("http://localhost:8888/client/delete"+'/'+name).
  
    subscribe(
      data => {
          console.log("Delete Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }

  getClientByName(name:string) {
    const url = "${this.customersUrl}/${index}";

    this.http.get("http://localhost:8888/client/findClientByName"+'/'+name).
    map(
        (response:Response)=> {
            const clientIn:any =response.json();
            console.log(response.json());
            let id= clientIn.id;
            let name= clientIn.name;
            let email=clientIn.email;
            let phone=clientIn.phone;
            console.log(id,name,email,phone);
            let client:ClientNoP =new ClientNoP(id,name,email,phone);
            console.log(client);
            return client;
        }
        
    )  
    .subscribe(
        (client: ClientNoP) => {
            console.log(client);
          this.clientsService.setCurrentClient(client);
          
        });
  }

  findClient(name:string){
    this.http.get("http://localhost:8888/client/findClientByName"+"/"+name)
    .map(
        (response: Response) => {
          const  clients: Client[] = response.json();

          return clients;
        }
      )
      .subscribe(
        (clients: Client[]) => {
            console.log(clients);
          this.clientsService.setclients(clients);
        }
      );

  }

  deleteClient(index:number) {
    const url = "${this.customersUrl}/${index}";
    return this.http.delete("http://localhost:8888/client/delete"+'/'+ index)    .subscribe(
      data => {
          console.log("Delete Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  updateClient(name:string,client:Client){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', client.email);
    urlSearchParams.append('name', name);
    urlSearchParams.append('phone', client.phone);
    urlSearchParams.append('password', client.password);
    urlSearchParams.append('newName',client.name);
   
    this.http.put("http://localhost:8888/client/updateClient",urlSearchParams)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });

  }

///////////admin crud
getAdmins() {
    this.http.get("http://localhost:8888/admin/allAdmins")
    .map(
        (response: Response) => {
          const  admins: Admin[] = response.json();

          return admins;
        }
      )
      .subscribe(
        (admins: Admin[]) => {
            console.log(admins);
          this.adminsService.setadmins(admins);
        }
      );
    }
  
  addAdmin(admin:AdminLogin)  {
    let urlSearchParams = new URLSearchParams();  
    urlSearchParams.append('name', admin.name);
    urlSearchParams.append('password', admin.password);
    urlSearchParams.append('Cpassword', admin.password);

    this.http.post("http://localhost:8888/admin/addAdmin",urlSearchParams)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  deleteAdminByName(name:string) {
    const url = "${this.customersUrl}/${index}";
    return this.http.delete("http://localhost:8888/admin/delete"+'/'+name)    .subscribe(
      data => {
          console.log("Delete Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }

  findAdmin(name:string){
    this.http.get("http://localhost:8888/admin/findAdminByName"+"/"+name)
    .map(
        (response: Response) => {
          const  admins: Admin[] = response.json();

          return admins;
        }
      )
      .subscribe(
        (admins: Admin[]) => {
            console.log(admins);
          this.adminsService.setadmins(admins);
        }
      );

  }

  deleteAdmin(index:number) {
    const url = "${this.customersUrl}/${index}";
    return this.http.delete("http://localhost:8888/admin/delete"+'/'+ index)    .subscribe(
      data => {
          console.log("Delete Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  updateAdmin(name:string,admin:Admin){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', name);
    urlSearchParams.append('password', admin.password);
    urlSearchParams.append('newName',admin.name);
   
    this.http.put("http://localhost:8888/admin/updateAdmin",urlSearchParams)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });

  }
}