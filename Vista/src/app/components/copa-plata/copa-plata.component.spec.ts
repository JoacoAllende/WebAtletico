import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaPlataComponent } from './copa-plata.component';

describe('CopaPlataComponent', () => {
  let component: CopaPlataComponent;
  let fixture: ComponentFixture<CopaPlataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopaPlataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaPlataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
