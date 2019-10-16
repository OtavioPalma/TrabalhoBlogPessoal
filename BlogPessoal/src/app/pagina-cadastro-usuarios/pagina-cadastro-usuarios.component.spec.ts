import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCadastroUsuariosComponent } from './pagina-cadastro-usuarios.component';

describe('PaginaCadastroUsuariosComponent', () => {
  let component: PaginaCadastroUsuariosComponent;
  let fixture: ComponentFixture<PaginaCadastroUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCadastroUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCadastroUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
