import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Artisan } from 'src/app/shared/artisan.model';
import { Subscription } from 'rxjs';
import { artisansService } from '../artisan.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-artisan-list',
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.css']
})
export class ArtisanListComponent implements OnInit,OnDestroy,OnChanges {
  artisans: Artisan[];
  subscription: Subscription;
  constructor(private artisansService: artisansService,
    private dataStorageService: DataStorageService) { }

    ngOnChanges() {
      this.dataStorageService.getArtisans();
    }
  
  ngOnInit() {
    this.subscription=this.artisansService.artisansChanged.subscribe(
      (artisans: Artisan[]) => {
        this.artisans=artisans;  
      }
    );

    this.dataStorageService.getArtisans();
    
    console.log(this.artisans);
  }

  ngOnDestroy()  {
    this.subscription.unsubscribe();
  }
}
