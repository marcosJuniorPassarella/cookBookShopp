import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesItemComponent } from './recipes-item.component';

describe('RecipesItemComponent', () => {
  let component: RecipesItemComponent;
  let fixture: ComponentFixture<RecipesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
