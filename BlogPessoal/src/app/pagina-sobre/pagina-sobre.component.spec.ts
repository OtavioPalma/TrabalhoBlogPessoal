import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSobreComponent } from './pagina-sobre.component';

describe('PaginaSobreComponent', () => {
  let component: PaginaSobreComponent;
  let fixture: ComponentFixture<PaginaSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
