import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComentariosComponent } from './pagina-comentarios.component';

describe('PaginaComentariosComponent', () => {
  let component: PaginaComentariosComponent;
  let fixture: ComponentFixture<PaginaComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
