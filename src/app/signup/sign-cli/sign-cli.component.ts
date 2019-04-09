import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, EmailValidator } from '@angular/forms';
import { DataStorageService } from '../../shared/data-storage.service';
import { ClientLogin } from '../../shared/client.model';


@Component({
  selector: 'app-sign-cli',
  templateUrl: './sign-cli.component.html',
  styleUrls: ['../signup.component.css']
})
export class SignCliComponent implements OnInit {

  signup :FormGroup;
  // artisan:ArtisanLogin;
   constructor(private fb: FormBuilder,private storage : DataStorageService) { }
   
   ngOnInit():void{
     this.signup = this.fb.group({
     email:[null,EmailValidator],
     name:[null,Validators.required],
     password:[null,Validators.required],
     Cpassword:[null,Validators.required],
     phone:[null,Validators.required],
     
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
         let  Cpassword:string=
         this.signup.controls['Cpassword'].value;
         let client=new ClientLogin(name,password,email,phone,Cpassword);
        // artisan);
 
         this.storage.addClient(client);
   }

}
