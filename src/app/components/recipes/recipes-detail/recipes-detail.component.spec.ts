import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailComponent } from './recipes-detail.component';

describe('RecipesDetailComponent', () => {
  let component: RecipesDetailComponent;
  let fixture: ComponentFixture<RecipesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
