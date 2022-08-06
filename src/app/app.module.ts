import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipesListComponent } from './pages/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './pages/recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './pages/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './pages/shopping-list/shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './pages/shared/dropdown.directive';
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
