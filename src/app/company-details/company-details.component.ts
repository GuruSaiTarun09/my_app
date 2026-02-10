import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z]+$/)]),
    salary: new FormControl("",[Validators.required,Validators.min(200000),Validators.max(9999999)]),

    company: new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z]+$/)]),
      industry: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z]+$/)]),
      size: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(1000)]),
    }),

    location: new FormGroup({
      city: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      state: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      country: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    }),
    workmode: new FormControl(),
    skills: new FormArray([]),
    hikes: new FormArray([]),
    type:new FormControl()
  });

get skillsFormArray(){
      return this.userForm.get('skills') as FormArray;
    }
  addskills(){
    this.skillsFormArray.push(
      new FormGroup({
        name: new FormControl("",[Validators.required,Validators.min(3),Validators.max(20)]),
        level: new FormControl("",[Validators.required,Validators.min(3),Validators.max(20),])
        
      })
    )
  }
  get hikesFormArray() {
    return this.userForm.get('hikes') as FormArray;
  }
  addhikes() {
    this.hikesFormArray.push(
      new FormGroup({
        year: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
        Percentsalary: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      })
    )
  }
  constructor(){
    this.userForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data==='fulltime'){
          this.userForm.addControl('healthinsuranceamount', new FormControl("",[Validators.required,Validators.maxLength(100)]));
          this.userForm.removeControl('contractduration');
        }
        else{
          this.userForm.addControl('contractduration', new FormControl("",[Validators.required,Validators.maxLength(100)]));
          this.userForm.removeControl('healthinsuranceamount');    
        }
      }
    )
  }
    delete(i: number) {
    this.hikesFormArray.removeAt(i);
  }
    remove(i: number) {
    this.skillsFormArray.removeAt(i);
  }
  submit() {
    console.log(this.userForm.value);
  }
}
