import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPostComponent } from './pagina-post.component';

describe('PaginaPostComponent', () => {
  let component: PaginaPostComponent;
  let fixture: ComponentFixture<PaginaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
