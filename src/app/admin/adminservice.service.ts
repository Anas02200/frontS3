import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from "../shared/admin.model";

import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

    adminsChanged= new Subject<Admin[]>();
    http: HttpClientModule


    private admins: Admin[] = [

      ];

    constructor(){}

    setadmins(admins: Admin[]) {
        this.admins=admins;
        this.adminsChanged.next(this.admins.slice());
    }


    getadmins() {
        return this.admins.slice();
    }

    getAdminsBack() {

    }

    getAdmin(id:number) {
        return this.admins.slice()[id];
    }


    addadmin(admin :Admin) {
        this.admins.push(admin);
        this.adminsChanged.next(this.admins.slice());
    }

    updateadmin(index: number, newadmin: Admin) {
        this.admins[index] = newadmin;
        this.adminsChanged.next(this.admins.slice());
    }

    deleteadmin(index: number) {
        this.admins.splice(index, 1);
        this.adminsChanged.next(this.admins.slice());
    }

}
