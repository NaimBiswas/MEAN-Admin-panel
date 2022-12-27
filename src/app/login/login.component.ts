import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSubmitted: boolean = true
  email: String = ''
  password: String = ''
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(6)])
  })
  constructor(private el: ElementRef, private router: Router, private authServe: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginSubmitted = true;

      for (const key of Object.keys(this.loginForm.controls)) {
        if (this.loginForm.controls[key].invalid) {
          const invalidControl = this.el.nativeElement.querySelector(
            '[formcontrolname="' + key + '"]'
          );
          invalidControl.focus();
          break;
        }
      }

      return;

    }
    this.authServe.login(this.email, this.password)
    // this.router.navigate(['dashboard'])
  }
}
