import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFicheComponent } from './form-fiche.component';

describe('FormFicheComponent', () => {
  let component: FormFicheComponent;
  let fixture: ComponentFixture<FormFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFicheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
