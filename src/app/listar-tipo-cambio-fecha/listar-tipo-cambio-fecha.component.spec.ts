import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoCambioFechaComponent } from './listar-tipo-cambio-fecha.component';

describe('ListarTipoCambioFechaComponent', () => {
  let component: ListarTipoCambioFechaComponent;
  let fixture: ComponentFixture<ListarTipoCambioFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoCambioFechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTipoCambioFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
