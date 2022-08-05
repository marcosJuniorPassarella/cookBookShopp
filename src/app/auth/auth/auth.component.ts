import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    const { email } = form.value;
    const { password } = form.value;

    if (this.isLoginMode) {
      //....
    } else {
      this.authService.signUp(email, password).subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
      });
    }
    form.reset();
  }
}
