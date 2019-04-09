import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { artisansService } from 'src/app/artisan/artisan.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private artisansService:artisansService,
    private route: ActivatedRoute,
    private router: Router,
    private datastorageService: DataStorageService) { }

  ngOnInit() {
    this.initForm();
  }

  onSignin() {

  }

  private initForm() {

    this.signinForm = new FormGroup({
      'login' : new FormControl('' ,Validators.required),
      'password' : new FormControl('', Validators.required),
    });
  }
  
}
