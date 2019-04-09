import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthServService } from '../shared/auth-serv.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  Jwt:string;
  id:string;
  constructor(private auth:AuthServService) { }

  ngOnInit() {
    if (localStorage.getItem('token')){
    this.Jwt=localStorage.getItem('token');
    let JwtHelper= new JwtHelperService();
    let JwtObj =JwtHelper.decodeToken(this.Jwt);
    this.id = JwtObj.sub;}
    else this.id='';
  }

  isAuth(){
    return this.auth.isAuth();

  }
}
