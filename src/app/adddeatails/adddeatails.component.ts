import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentdetailsService } from '../studentdetails.service';  

@Component({
  selector: 'app-adddeatails',
  templateUrl: './adddeatails.component.html',
  styleUrls: ['./adddeatails.component.css']
})
export class AdddeatailsComponent {

  adddeatailsForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture: new FormControl(),
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
  });

  constructor(private adddeatailsService: StudentdetailsService) {}  

  submit() {
    console.log(this.adddeatailsForm.value);

    this.adddeatailsService.createadddeatails(this.adddeatailsForm.value).subscribe(
      (data: any) => {
        alert("created successfully");
      },
      (err: any) => {
        alert("internal server error");
      }
    );
  }
}
