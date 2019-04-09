import { FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
import { ArtisanLogin, ArtisanNoP } from 'src/app/shared/artisan.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { artisansService } from '../artisan.service';
@Component({
  selector: 'app-artisan-edit',
  templateUrl: './artisan-edit.component.html',
  styleUrls: ['./artisan-edit.component.css']
})
export class ArtisanEditComponent implements OnInit,OnDestroy {

  hide = true;
  edit: FormGroup;
  Jwt: string;
  id: string;
  artisanI:ArtisanNoP;
  subscription:Subscription;

  constructor(private fb: FormBuilder,
    private dataStorage: DataStorageService,
    private artisanService: artisansService,
    private router: Router,
    private route: ActivatedRoute,

    ) { }

  ngOnInit() {
    this.Jwt=localStorage.getItem('token');
    let JwtHelper= new JwtHelperService();
    let JwtObj =JwtHelper.decodeToken(this.Jwt);
    this.id = JwtObj.sub;
    console.log(this.id);
    this.subscription = this.artisanService.currentArtisan.subscribe(
      (artisan: ArtisanNoP) => {
        this.artisanI = artisan;
        let name= this.artisanI.name;
        let phone=this.artisanI.phone;
        let email=this.artisanI.email;
        let address=this.artisanI.address;
        let service=this.artisanI.service['typeService'];
    
        this.edit = this.fb.group({
          
          name :[name,Validators.required],
          phone :[phone,Validators.required],
          email :[email,Validators.email],
          address :[address,Validators.required],
          service :[service,Validators.email],
          password :[null,Validators.required],
          passwordc :[null,Validators.required],
        });
        console.log(this.artisanI);
      }
      );
      console.log(this.id);
    this.dataStorage.getArtisanByName(this.id);
    
   

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
         let address: string=
         this.edit.controls['address'].value;
         let service: string=
         this.edit.controls['service'].value;
         let  Cpassword:string=
         this.edit.controls['Cpassword'].value;
         let artisan=new ArtisanLogin(name,password,email,address,service,phone,Cpassword);
        // artisan);
 
         this.dataStorage.addArtisan(artisan);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
