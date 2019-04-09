import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
import { ClientLogin, ClientNoP } from 'src/app/shared/client.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { clientsService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit,OnDestroy{
  hide = true;
  edit: FormGroup;
  Jwt: string;
  id: string;
  clientI:ClientNoP;
  subscription:Subscription;

  constructor(private fb: FormBuilder,
    private dataStorage: DataStorageService,
    private clientService: clientsService,
    private router: Router,
    private route: ActivatedRoute,

    ) { }

  ngOnInit() {
    this.Jwt=localStorage.getItem('token');
    let JwtHelper= new JwtHelperService();
    let JwtObj =JwtHelper.decodeToken(this.Jwt);
    this.id = JwtObj.sub;
    console.log(this.id);
    this.subscription = this.clientService.currentClient.subscribe(
      (client: ClientNoP) => {
        this.clientI = client;
        let name= this.clientI.name;
        let phone=this.clientI.phone;
        let email=this.clientI.email;
    
        this.edit = this.fb.group({
          
          name :[name,Validators.required],
          phone :[phone,Validators.required],
          email :[email,Validators.email],
          password :[null,Validators.required],
          passwordc :[null,Validators.required],
        });
        console.log(this.clientI);
      }
      );
      console.log(this.id);
    this.dataStorage.getClientByName(this.id);
    
   

  }

  onSubmit() {
         let name:string=
         this.edit.controls['name'].value;
         let password: string=
         this.edit.controls['password'].value;
         let email: string=
         this.edit.controls['email'].value;
         let phone: string=
         this.edit.controls['phone'].value;
         let  Cpassword:string=
         this.edit.controls['Cpassword'].value;
         let client=new ClientLogin(name,password,email,phone,Cpassword);
        // artisan);
        console.log(client)
 
         this.dataStorage.addClient(client);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
