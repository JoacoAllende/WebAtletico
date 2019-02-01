import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneosPasadosComponent } from './torneos-pasados.component';

describe('TorneosPasadosComponent', () => {
  let component: TorneosPasadosComponent;
  let fixture: ComponentFixture<TorneosPasadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorneosPasadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneosPasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
