
import { Injectable } from "@angular/core";


import { Subject } from "rxjs";
import { Artisan, ArtisanNoP } from "../shared/artisan.model";
import { Http } from "@angular/http";

@Injectable()
export class artisansService{
    currentArtisan = new Subject<ArtisanNoP>();
    artisansChanged= new Subject<Artisan[]>();
    artisansnoPChanged= new Subject<ArtisanNoP[]>();
    http: Http;
    private artisansNoP:ArtisanNoP[]=[];
    private artisans: Artisan[] = [];
    private artisan:ArtisanNoP;

    constructor(){}

    setartisans(artisans: Artisan[]) {
        this.artisans=artisans;
        this.artisansChanged.next(this.artisans.slice());
    }
    setartisansnoP(artisans: ArtisanNoP[]) {
        this.artisansNoP=artisans;
        this.artisansnoPChanged.next(this.artisansNoP.slice());
    }


    getartisans() {
        return this.artisans.slice();
    }
    getartisansNoP() {
        return this.artisansNoP.slice();
    }

    getArtisansBack() {

    }

    getArtisan(id:number) {
        return this.artisans.slice()[id];
    }
    getArtisanNoP(id:number) {
        return this.artisansNoP.slice()[id];
    }


    addartisan(artisan :Artisan) {
        this.artisans.push(artisan);
        this.artisansChanged.next(this.artisans.slice());
    }
    addartisanNoP(artisan :ArtisanNoP) {
        this.artisansNoP.push(artisan);
        this.artisansnoPChanged.next(this.artisansNoP.slice());
    }

    updateartisan(index: number, newartisan: Artisan) {
        this.artisans[index] = newartisan;
        this.artisansChanged.next(this.artisans.slice());
    }
    updateartisanNoP(index: number, newartisan: ArtisanNoP) {
        this.artisansNoP[index] = newartisan;
        this.artisansnoPChanged.next(this.artisansNoP.slice());
    }

    deleteartisan(index: number) {
        this.artisans.splice(index, 1);
        this.artisansChanged.next(this.artisans.slice());
    }
    deleteartisanNoP(index: number) {
        this.artisansNoP.splice(index, 1);
        this.artisansnoPChanged.next(this.artisansNoP.slice());
    }
    setCurrentArtisan(artisan:ArtisanNoP) {
        this.artisan=artisan;
        this.currentArtisan.next(this.artisan);

    }

}   