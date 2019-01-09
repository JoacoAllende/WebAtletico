import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGoleadoresComponent } from './actualizar-goleadores.component';

describe('ActualizarGoleadoresComponent', () => {
  let component: ActualizarGoleadoresComponent;
  let fixture: ComponentFixture<ActualizarGoleadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarGoleadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarGoleadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
