import { Injectable } from '@angular/core';
import { Admin } from "../shared/admin.model";
import { Http } from "@angular/http";
import { Subject } from "rxjs";
import { report } from './report.model';

@Injectable({
  providedIn: 'root'
})
export class reportsService {

    reportsChanged= new Subject<report[]>();
    http: Http;
    
    public reports: report[] = [];

    constructor(){}

    setreports(reports: report[]) {
        this.reports=reports;
        this.reportsChanged.next(this.reports.slice());
    }


    getreports() {
        return this.reports.slice();
    }

    getAdminsBack() {

    }

    getreport(id:number) {
        return this.reports.slice()[id];
    }


    addreport(report :report) {
        this.reports.push(report);
        this.reportsChanged.next(this.reports.slice());
    }



    deletereport(index: number) {
        this.reports.splice(index, 1);
        this.reportsChanged.next(this.reports.slice());
    }
    }