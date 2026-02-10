import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm: FormGroup = new FormGroup({
    
    name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern(/^[a-zA-Z]+$/)]),
    age: new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
    email: new FormControl("",[Validators.required,Validators.email,capgeminiEmail]),
    password:new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/
)]),
    address: new FormGroup({
      city: new FormControl("",[Validators.required, Validators.minLength(3)]),
      pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    cards: new FormArray([]),
    type: new FormControl(),
    // Busfee: new FormControl(),
    // hostelfee: new FormControl()
  });

  constructor(){
    this.userForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data==='dayscholor'){
          this.userForm.addControl('Busfee', new FormControl("", [Validators.required,Validators.min(100)]));
          this.userForm.removeControl('hostelfee');
        }
        else{
          this.userForm.addControl('hostelfee', new FormControl("", [Validators.required,Validators.min(100)]));
          this.userForm.removeControl('Busfee');    
        }
      }
    )
  }

  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }

  addCard() {
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
      })
    );
  }

  delete(i: number) {
    this.cardsFormArray.removeAt(i);
  }
  submit() {
    console.log(this.userForm.value);
  }
}
 function capgeminiEmail(control:AbstractControl){
    if(control.value.includes('@capgemini.com')){
      return null;
    }
    else{
      return{'capgeminiEmail':true}
    }
  }


