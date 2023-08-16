import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLaticinioComponent } from './novo-laticinio.component';

describe('NovoLaticinioComponent', () => {
  let component: NovoLaticinioComponent;
  let fixture: ComponentFixture<NovoLaticinioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoLaticinioComponent]
    });
    fixture = TestBed.createComponent(NovoLaticinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
