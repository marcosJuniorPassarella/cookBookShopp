import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../components/alert/alert.component';
import { PlaceholderDirective } from '../directives/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [],
})
export class AuthComponent implements OnDestroy {
  private closeSub!: Subscription;
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

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
        this.showErrorAlert(err);
        this.isLoading = false;
      },
    });
    form.reset();
  }

  onHandleError(): void {
    this.error = null;
  }

  private showErrorAlert(message: string): void {
    const hostViewContainerRef = this.alertHost.viewCRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(AlertComponent);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe({
      next: () => {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
      },
    });
  }

  ngOnDestroy(): void {
    this.closeSub && this.closeSub.unsubscribe();
  }
}
