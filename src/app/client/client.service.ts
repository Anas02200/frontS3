import { Injectable } from "@angular/core";


import { Subject } from "rxjs";
import { Client, ClientNoP } from "../shared/client.model";
import { Http } from "@angular/http";

@Injectable()
export class clientsService{
    currentClient = new Subject<ClientNoP>();

    clientsChanged= new Subject<Client[]>();
    clientsNoPChanged= new Subject<ClientNoP[]>();
    http: Http;
    
    private clients: Client[] = [];
    private clientsNoP: ClientNoP[] = [];
    private client:ClientNoP;

    constructor(){}

    setclients(clients: Client[]) {
        this.clients=clients;
        this.clientsChanged.next(this.clients.slice());
    }
    setclientsNoP(clients: ClientNoP[]) {
        this.clientsNoP=clients;
        this.clientsNoPChanged.next(this.clientsNoP.slice());
    }


    getclients() {
        return this.clients.slice();
    }
    getclientsNoP() {
        return this.clientsNoP.slice();
    }

    getCurrentClient() {
        return this.client;
    }
    setCurrentClient(client:ClientNoP) {
        this.client=client;
        this.currentClient.next(this.client);

    }

    getClient(id:number) {
        return this.clients.slice()[id];
    }
    getClientNoP(id:number) {
        return this.clients.slice()[id];
    }


    addclient(client :Client) {
        this.clients.push(client);
        this.clientsChanged.next(this.clients.slice());
    }
    addclientNoP(client :ClientNoP) {
        this.clientsNoP.push(client);
        this.clientsNoPChanged.next(this.clientsNoP.slice());
    }

    updateclient(index: number, newclient: Client) {
        this.clients[index] = newclient;
        this.clientsChanged.next(this.clients.slice());
    }
    updateclientNoP(index: number, newclient: ClientNoP) {
        this.clientsNoP[index] = newclient;
        this.clientsNoPChanged.next(this.clientsNoP.slice());
    }

    deleteclient(index: number) {
        this.clients.splice(index, 1);
        this.clientsChanged.next(this.clients.slice());
    }
    deleteclientNoP(index: number) {
        this.clientsNoP.splice(index, 1);
        this.clientsNoPChanged.next(this.clientsNoP.slice());
    }

}   