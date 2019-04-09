import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { artisansService } from '../artisan/artisan.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Artisan, ArtisanNoP } from '../shared/artisan.model';
import { PopupService } from '../shared/popup.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-service-artisans',
  templateUrl: './service-artisans.component.html',
  styleUrls: ['./service-artisans.component.css']
})
export class ServiceArtisansComponent implements OnInit,OnDestroy {

  serviceName: string;
  artisans:ArtisanNoP[];
  subscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router:Router,
    private route:ActivatedRoute,
    private artisansService :artisansService,
    private dataStorage:DataStorageService,
    private popupService:PopupService,) { }

  ngOnInit() {
    this.subscription = this.artisansService.artisansnoPChanged.subscribe(
      (artisans: ArtisanNoP[]) => {
        this.artisans = artisans;
      }
    );

    this.dataStorage.findArtisanByService(this.route.snapshot.params['name']);
  }
  
  OpenPopup(name:string){

    
      return this.popupService.openDialogA(name);
   
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

