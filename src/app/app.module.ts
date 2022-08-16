import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { HeaderComponent } from './pages/header/header.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './pages/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './shared/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { PlaceholderDirective } from './shared/directives/placeholder.directive';
import { RecipesModule } from './pages/recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
