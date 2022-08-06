import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { HeaderComponent } from './pages/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipesListComponent } from './pages/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './pages/recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './pages/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './pages/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipesStartComponent } from './pages/recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './pages/recipes/recipes-edit/recipes-edit.component';
import { AuthComponent } from './shared/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipesStartComponent,
    RecipesEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
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
