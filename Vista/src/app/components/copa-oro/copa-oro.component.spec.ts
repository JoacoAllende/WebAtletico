import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaOroComponent } from './copa-oro.component';

describe('CopaOroComponent', () => {
  let component: CopaOroComponent;
  let fixture: ComponentFixture<CopaOroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopaOroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaOroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
