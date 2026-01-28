import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient:HttpClient) { }
    // get
    getVehicles(){
      return this.httpClient.get<Vehicle[]>("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
    }
    // filter
     filterVehicles(term:string){
      return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
    }
    // delete
    deleteVehicles(id:string){
      return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
    }
    // sorting
    sortVehicles(Column:string, Order:string){
      return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+Column+"&order="+Order);
    }
    // pagination,
     paginateVehicles(limit: number, page: number) {
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit +"&page=" +page);
}
    //post
    createVehicles(vechicle:any){
      return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vechicle);
    }
    //view
    getVehicle(id:string){
      return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
    }
    // edit
    // getVehicle(id:string){
    //   return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
    // }

    updateVehicles(vechicle:any, id:string){{
      return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,vechicle);
    }}
}
