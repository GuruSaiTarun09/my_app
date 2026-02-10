import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vechicle',
  templateUrl: './create-vechicle.component.html',
  styleUrls: ['./create-vechicle.component.css']
})
export class CreateVechicleComponent {
      // newVehicle = {
      //   vehicle:'',
      //   color:''
      // }

      vechicleForm:FormGroup = new FormGroup(
        {
          Vehicle:new FormControl(),
          manufacturer:new FormControl(),
          model:new FormControl(),
          type:new FormControl(),
          fuel:new FormControl(),
          color:new FormControl(),
          image:new FormControl(),
          cost:new FormControl(),
          tyres:new FormControl(),
        }
      )


      id:string = "";

      constructor(private vehicleService:VehicleService,private activatedRoute:ActivatedRoute){
        activatedRoute.params.subscribe(
          (data:any)=>{
            this.id=data.id;

            //api call to load data
            vehicleService.getVehicle(data.id).subscribe(
              (data:any)=>{
                //patch vechicle data to the form
                this.vechicleForm.patchValue(data);
              }
            )
          }
        )
      }
      
            submit(){

              if(this.id){
                // edit
                this.vehicleService.updateVehicles(this.vechicleForm.value,this.id).subscribe(
                  (data:any)=>{
                    alert("created successfully");
                    this.vechicleForm.reset();
                  },
                  (err:any)=>{
                    alert("internal server error");
                  }
                )
              }
              else{
                //create
                this.vehicleService.createVehicles(this.vechicleForm.value).subscribe(
                   (data:any)=>{
                    alert("created successfully");
                    this.vechicleForm.reset();
                  },
                  (err:any)=>{
                    alert("internal server error");
                  }
                )
              }
        console.log(this.vechicleForm.value);
        this.vehicleService.createVehicles(this.vechicleForm.value).subscribe(
          (data:any)=>{
            alert("created successfully");
            this.vechicleForm.reset();
          },
          (err:any)=>{
            alert("internal server error");
          }
        )
      }

}
