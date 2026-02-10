import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vechicle-details',
  templateUrl: './vechicle-details.component.html',
  styleUrls: ['./vechicle-details.component.css']
})
export class VechicleDetailsComponent {

    vehicle:any={};

    constructor(private activatedRoute:ActivatedRoute,
                private vehicleService:VehicleService){
      activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data);

          //api call data load
         vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
         )
        }
      )
    }
}
