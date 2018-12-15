import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctavosOroComponent } from './octavos-oro.component';

describe('OctavosOroComponent', () => {
  let component: OctavosOroComponent;
  let fixture: ComponentFixture<OctavosOroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctavosOroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctavosOroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
