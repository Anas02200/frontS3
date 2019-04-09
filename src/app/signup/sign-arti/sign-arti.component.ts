import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { FormBuilder, Validators, FormGroup, EmailValidator } from '@angular/forms';
import { artisansService } from '../../artisan/artisan.service';
import { Artisan, ArtisanLogin } from '../../shared/artisan.model';

@Component({
  selector: 'app-sign-arti',
  templateUrl: './sign-arti.component.html',
  styleUrls: ['../signup.component.css']
})
export class SignArtiComponent implements OnInit {
  signup :FormGroup;
 // artisan:ArtisanLogin;
  constructor(private fb: FormBuilder,private storage : DataStorageService) { }
  
  ngOnInit():void{
    this.signup = this.fb.group({
    email:[null,EmailValidator],
    name:[null,Validators.required],
    password:[null,Validators.required],
    Cpassword:[null,Validators.required],
    address:[null,Validators.required],
    phone:[null,Validators.required],
    service:[null,Validators.required],
  });
  }
  onSubmit(){

        let name:string=this.signup.controls['name'].value;
        let password: string=
        this.signup.controls['password'].value;
        let email: string=
        this.signup.controls['email'].value;
       let phone: string=
        this.signup.controls['phone'].value;
       let adress: string=
        this.signup.controls['address'].value;
        let  service:string=
        this.signup.controls['service'].value;
        let  Cpassword:string=
        this.signup.controls['Cpassword'].value;
        let artisan=new ArtisanLogin(name,password,email,phone,adress,service,Cpassword);
       // artisan);

        this.storage.addArtisan(artisan);
  }
}
