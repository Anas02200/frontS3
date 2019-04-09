import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopupService } from '../shared/popup.service';
import { AuthServService } from '../shared/auth-serv.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-xnav',
  templateUrl: './xnav.component.html',
  styleUrls: ['./xnav.component.css']
})
export class XnavComponent implements OnInit {



  ngOnInit(){
    this.auth.loadToken();
    //console.log(this.auth.loadToken());
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private Popup:PopupService,
    private auth:AuthServService,
    private router:Router,
    private route:ActivatedRoute) {}
   
  OpenPopup(){
    
     return this.Popup.openDialog();
  }
  isAdmin(){
    return this.auth.isAdmin();
  }
  /////////
  isClient(){
    return this.auth.isClient();
  }
  ///////////
  isArtisan(){
    return this.auth.isArtisan();
  }
  /////
  isAuth(){
    return this.auth.isAuth();

  }
  LogOut(){
    this.auth.logOut();
    this.router.navigate(['/first-page']);
  }


}
