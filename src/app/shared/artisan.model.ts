import { Service } from "./service.model";

export class Artisan{


    constructor(public name: string,
        public pseudo: string,
        public password: string,
        public email: string,
        public phone: string,
        public adress: string,
        public service:String,
        ){}
}
export class ArtisanLogin{


    constructor(
        public name: string,
        public password: string,
        public email: string,
        public phone: string,
        public adress: string,
        public service:string,
        public Cpassword:string
        ){}
}

export class ArtisanNoP{


    constructor(
        public id: string,
        public name: string,
        public email: string,
        public phone: string,
        public address: string,
        public service:Service,
        ){}
}