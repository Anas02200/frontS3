import { Component, OnInit, Input } from '@angular/core';
import { Artisan } from 'src/app/shared/artisan.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { artisansService } from '../artisan.service';

@Component({
  selector: 'app-artisan-item',
  templateUrl: './artisan-item.component.html',
  styleUrls: ['./artisan-item.component.css']
})
export class ArtisanItemComponent implements OnInit {

  @Input() artisan: Artisan;
  @Input() index: Number;

  constructor(private dataStorageService: DataStorageService,
    private artisansService: artisansService) { }

  ngOnInit() {
  }

}
