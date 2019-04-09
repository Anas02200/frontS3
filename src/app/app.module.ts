import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtisanListComponent } from './artisan/artisan-list/artisan-list.component';
import { ArtisanEditComponent } from './artisan/artisan-edit/artisan-edit.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { AdminComponent } from './admin/admin.component';
import { ContractListComponent } from './admin/contract-list/contract-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServicesComponent } from './services/services.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ServiceItemComponent } from './services/service-item/service-item.component';
import { ServicesService } from './services/services.service';
import { DataStorageService } from './shared/data-storage.service';
import { ArtisanComponent } from './artisan/artisan.component';
import { ClientComponent } from './client/client.component';
import { ArtisanItemComponent } from './artisan/artisan-item/artisan-item.component';
import { artisansService } from './artisan/artisan.service';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NavCompComponent } from './nav-comp/nav-comp.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatGridListModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatSlideToggleModule, MatDividerModule, MatTableModule } from '@angular/material';
import { XnavComponent } from './xnav/xnav.component';
import { SigninFComponent } from './signin-f/signin-f.component';
import { SignCliComponent } from './signup/sign-cli/sign-cli.component';
import { SignArtiComponent } from './signup/sign-arti/sign-arti.component';
import { DashComponent } from './dash/dash.component';
import { clientsService } from './client/client.service';
import {MatDialogModule} from "@angular/material";
import { MatTabsModule } from '@angular/material';
import { ReportComponent } from './report/report.component'
import { reportsService } from './shared/report.service';
import { PlaintesComponent } from './admin/plaintes/plaintes.component';
import { ServiceArtisansComponent } from './service-artisans/service-artisans.component';
import { MessageConfComponent } from './message-conf/message-conf.component';





@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    ArtisanListComponent,
    ArtisanEditComponent,
    DropdownDirective,
    ClientEditComponent,
    ClientListComponent,
    AdminComponent,
    ContractListComponent,
    ServicesComponent,
    FirstPageComponent,
    ServicesListComponent,
    ServiceItemComponent,
    ArtisanComponent,
    ArtisanItemComponent,
    AdminSigninComponent,
    ClientComponent,
    XnavComponent,
    SigninFComponent,
    SignCliComponent,
    SignArtiComponent,
    DashComponent,
    ReportComponent,
    PlaintesComponent,
    ServiceArtisansComponent,
    MessageConfComponent
    //NavCompComponent
  ],
  entryComponents: [MessageConfComponent],
  // declarations: [ConfirmComponent,...],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
  ],
  providers: [ServicesService,DataStorageService,artisansService,clientsService,reportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
