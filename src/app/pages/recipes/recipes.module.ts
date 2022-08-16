import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipesStartComponent,
    RecipesEditComponent,
  ],
  imports: [CommonModule],
  exports: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipesStartComponent,
    RecipesEditComponent,
  ],
})
export class RecipesModule {}
