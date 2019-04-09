import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { AuthServService } from '../shared/auth-serv.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-signin-f',
  templateUrl: './signin-f.component.html',
  styleUrls: ['./signin-f.component.css']
})
export class SigninFComponent implements OnInit {
  hide = true;
  addressForm:FormGroup;
  
  

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<SigninFComponent>,
    private auth:AuthServService) {

    }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.addressForm = this.fb.group({
      
      name:[null,Validators.required],
      password:[null,Validators.required]
    });
  
    
  }
  
  hasUnitNumber = false;
  ////////////////
  onSubmit(data) {
    data=JSON.stringify(this.addressForm.value);
  
    console.log(data);
   console.log(JSON.stringify(this.addressForm.value));
  
   this.auth.login(data)
   .subscribe(
     response=>{
      console.log(response.headers.get("Authorization"));//get zbl a97ab fct f tarikh
       let Jwt=response.headers.get("Authorization");
       this.auth.saveToken(Jwt);
        },err=>{

     }
   )
   
   
  }
  ////////
  save() {
    this.dialogRef.close(JSON.stringify(this.addressForm.value));
  }
  /////////
  close() {
    this.dialogRef.close();
}
//////////

}
