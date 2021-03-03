import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1TituloComponent } from './componente1-titulo.component';

describe('Componente1TituloComponent', () => {
  let component: Componente1TituloComponent;
  let fixture: ComponentFixture<Componente1TituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1TituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente1TituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
