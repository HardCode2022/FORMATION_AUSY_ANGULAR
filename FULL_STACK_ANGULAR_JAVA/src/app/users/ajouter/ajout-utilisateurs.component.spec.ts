import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUtilisateursComponent } from './ajout-utilisateurs.component';

describe('AjoutUtilisateursComponent', () => {
  let component: AjoutUtilisateursComponent;
  let fixture: ComponentFixture<AjoutUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
