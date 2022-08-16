import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

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
    let authObs$: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoginMode) {
      authObs$ = this.authService.login(email, password);
    } else {
      authObs$ = this.authService.signUp(email, password);
    }

    authObs$.subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      },
    });
    form.reset();
  }

  onHandleError(): void {
    this.error = null;
  }
}
