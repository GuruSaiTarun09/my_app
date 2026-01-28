import { Vehicle } from "./vehicle";

export interface User {
    name:string;
    age:number;
    isIndian:true;
    address:Address,
    addresses:Address[],
    phones:number[],
    vehicles:Vehicle[],
    company:Company;


}

interface Address{
    name:string;
    pin:number;
}
interface Company{
    name:string;
    location:string;
}
