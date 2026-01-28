import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        alert("Login success");
        localStorage.setItem("token", data.accessToken);

        // localStorage.setItem("token",data.rolee);
        localStorage.setItem("role","admin");
        //go to daashboard
        this.router.navigateByUrl("/dashboard");
      },
      (err: any) => {
        alert("Invalid credentials");
      }
    );
  }
}
