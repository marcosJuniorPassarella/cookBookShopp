import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesStartComponent } from './recipes-start.component';

describe('RecipesStartComponent', () => {
  let component: RecipesStartComponent;
  let fixture: ComponentFixture<RecipesStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
