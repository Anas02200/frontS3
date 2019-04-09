import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/shared/service.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  
  @Input() service: Service;
  @Input() index: string;

  constructor(private dataStorageService: DataStorageService,private servicesService: ServicesService) { }

  ngOnInit() {
  }

  onDelete(){ 

    // this.dataStorageService.deleteService(this.service.id);
    // this.servicesService.deleteservice(+this.index);
  }

  onCheck() {
    console.log(this.service.id);
  }
}
