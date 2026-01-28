import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, forkJoin, interval, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-optimization',
  templateUrl: './optimization.component.html',
  styleUrls: ['./optimization.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OptimizationComponent {
  vehicles: any = [];
  term: FormControl = new FormControl();
  interval:any;

  constructor(private vechicleService: VehicleService,
    private httpClients:HttpClient,
    private changeDectectionRef:ChangeDetectorRef
  ) {
    
    this.interval=setInterval(()=>{
      console.log("hello");
    },1000)
    this.term.valueChanges.pipe(
      filter((term: string) => term.length > 2),//minimum 3 chars to start serch
      debounceTime(1000),//gap after typing
      distinctUntilChanged(),//old call,current call should be diffrnt
      switchMap((term: string) => this.vechicleService.filterVehicles(term))//when new call trigger,ols will be canclled
    ).subscribe(
      (data: any) => {
        this.vehicles = data;
      }
    )

    vechicleService.getVehicles().subscribe(
      (data: any) => {
        console.log(data);
        this.vehicles = data;
        this.changeDectectionRef.detectChanges();
      }
    )
      //parllel api calls
     forkJoin([
  this.httpClients.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/24"),
  this.httpClients.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/25"),
  this.httpClients.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/26"),

  ])
  .subscribe(
    (data:any)=>{
      console.log(data);
    }
  )
  }
    trackById(vechicle:any){
      return vechicle.id;
    }
    ngOnDestroy():void{
      clearInterval(this.interval);
    }
}
