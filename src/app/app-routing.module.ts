import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ServicesComponent } from "./services/services.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { ArtisanComponent } from "./artisan/artisan.component";
import { AdminSigninComponent } from "./admin/admin-signin/admin-signin.component";
import { SigninFComponent } from "./signin-f/signin-f.component";
import { DashComponent } from "./dash/dash.component";
import { AdminComponent } from "./admin/admin.component";
import { ArtisanEditComponent } from "./artisan/artisan-edit/artisan-edit.component";
import { ClientEditComponent } from "./client/client-edit/client-edit.component";
import { ReportComponent } from "./report/report.component";
import { PlaintesComponent } from "./admin/plaintes/plaintes.component";
import { ServiceArtisansComponent } from "./service-artisans/service-artisans.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/first-page', pathMatch:'full'},
    { path: 'admin', component: AdminComponent },
    { path: 'first-page', component: FirstPageComponent },
    { path: 'report', component: ReportComponent },
    { path: 'plaintes', component: PlaintesComponent },
    { path: 'artisans', component: ArtisanComponent },
    { path: 'artisanEdit', component: ArtisanEditComponent },
    { path: 'clientEdit', component: ClientEditComponent },
    { path: 'services', component: ServicesComponent},
    { path: 'services/:name', component: ServiceArtisansComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signinF', component: SigninFComponent },
    { path: 'signinAdmin', component: AdminSigninComponent },
    
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}