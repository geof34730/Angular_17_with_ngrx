import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePokemonComponent } from './fiche-pokemon.component';

describe('FichePokemonComponent', () => {
  let component: FichePokemonComponent;
  let fixture: ComponentFixture<FichePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichePokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
