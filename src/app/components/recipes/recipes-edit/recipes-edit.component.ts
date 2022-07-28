import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.scss'],
})
export class RecipesEditComponent implements OnInit {
  id!: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      },
    });
  }
}
