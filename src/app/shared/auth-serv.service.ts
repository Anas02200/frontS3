import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  host:string="http://localhost:8888";
  Jwt:string;
  username:string;
  roles:Array<string>;

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(this.host+"/login",data,{
      observe:'response'
    }
    )

  }
  saveToken(Jwt: string){
    localStorage.setItem('token',Jwt);//local storage d navig to load it later
    this.Jwt=Jwt;
    this.parseJwt();
  }
  loadToken(){
    if (localStorage.getItem('token')){
    this.Jwt=localStorage.getItem('token');
    this.parseJwt();}
  }

  parseJwt(){
    let JwtHelper=new JwtHelperService();
    let JwtObj=JwtHelper.decodeToken(this.Jwt);
    this.username=JwtObj.sub;
    this.roles=JwtObj.roles;
    /*
    console.log(this.roles);
    console.log(this.username);
    console.log(this.isAdmin());
    console.log(this.isArtisan());
    console.log(this.isClient());
    console.log(this.isAuth());
    */

  }

  isAdmin(){

    if (this.roles)
    {    return this.roles[0]=="admin";}
    else return false;
  }
  isClient(){
    if (this.roles)
    {    return this.roles[0]=="Client";}
    else return false;
    

  }
  isArtisan(){
    if (this.roles)
    {    return this.roles[0]=="Artisan";}
    else return false;
  }
  isAuth(){
    if (this.Jwt)
    {return this.Jwt;}
    else return false;

    return this.roles[0]=='admin';
  }
 
  logOut(){
    localStorage.removeItem('token');
    this.initParams();


  }


  initParams(){
    this.Jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }



}
