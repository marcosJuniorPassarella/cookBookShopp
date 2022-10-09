import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  collapsed = true;
  isAuthenticated = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.getUserAuth();
  }

  getUserAuth(): void {
    this.userSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe({
        next: (user) => (this.isAuthenticated = !!user), // é o mesmo que !user ? false : true
        error: (err) => console.log(err),
      });
  }

  onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }

  onFetchData(): void {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
