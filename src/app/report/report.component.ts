import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { artisansService } from '../artisan/artisan.service';
import { clientsService } from '../client/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { reportsService } from '../shared/report.service';
import { report } from '../shared/report.model';
import { windowTime } from 'rxjs-compat/operator/windowTime';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit,OnDestroy {

  


  
  hide = true;
  report: FormGroup;
  Jwt: string;
  id: string;
  // repItem: report;
  
  subscription:Subscription;

  constructor(private fb: FormBuilder,
    private dataStorage: DataStorageService,
    private artisanService: artisansService,
    private clientService: clientsService,
    private router: Router,
    private route: ActivatedRoute,
    private reportService: reportsService

    ) { }

  ngOnInit() {
    this.Jwt=localStorage.getItem('token');
    let JwtHelper= new JwtHelperService();
    let JwtObj =JwtHelper.decodeToken(this.Jwt);
    this.id = JwtObj.sub;
    console.log(this.id);

    
        this.report = this.fb.group({
          
          msg :[null,Validators.required],

        });


    
   

  }

  onSubmit() {
        this.Jwt=localStorage.getItem('token');
        let JwtHelper= new JwtHelperService();
        let JwtObj =JwtHelper.decodeToken(this.Jwt);
        this.id = JwtObj.sub;
         let msg:string=
         this.report.controls['msg'].value;
         let date= new Date();
         let repItem= new report(this.id,msg,date);
        // artisan);
        this.reportService.addreport(repItem);
        console.log(repItem);
        this.reportService.reportsChanged.subscribe(
          data => {
            console.log(data);
          }
        )
          //  this.dataStorage.addArtisan(artisan);
  }

  ngOnDestroy() {
  }
}
