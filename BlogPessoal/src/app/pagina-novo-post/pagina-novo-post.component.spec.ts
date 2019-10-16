import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNovoPostComponent } from './pagina-novo-post.component';

describe('PaginaNovoPostComponent', () => {
  let component: PaginaNovoPostComponent;
  let fixture: ComponentFixture<PaginaNovoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNovoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNovoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
