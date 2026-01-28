import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

age:number[] =[];
role:string=String(localStorage.getItem('role'));


  // get
  vehicles: Vehicle[] = [];
  constructor(private vehicleService: VehicleService) {
    vehicleService.getVehicles().subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal server Error");
      }
    )
  }
  // filter
  term: string = "";
  filterVehicle() {
    this.vehicleService.filterVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal server Error");
      }
    )
  }

// sorting
      column: string = "";
      order: string = "";

    SortVehicles() {
    this.vehicleService.sortVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal sever error");
      }
    )
      
  }
// delete
  deleteVehicle(id: string) {
    this.vehicleService.deleteVehicles(id).subscribe(
      (data: any) => {
        alert: ("deleted successfully!!");
        location.reload();
      },
      (err: any) => {
        alert("internal server Error");
      }
    )
  }
  // pagination
  limit: number = 10;
  page: number = 1;
    PaginateVehicles() {
    this.vehicleService.paginateVehicles(this.limit, this.page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }
}
