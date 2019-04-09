export class Client{


    constructor(public name: string,
        public pseudo: string,
        public password: string,
        public email: string,
        public phone: string,
 
        ){}



        
}
export class ClientLogin{


    constructor(
        public name: string,
        public password: string,
        public email: string,
        public phone: string,
        public Cpassword:string,
        ){}
}
export class ClientNoP {
    
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public phone: string,){}
}
