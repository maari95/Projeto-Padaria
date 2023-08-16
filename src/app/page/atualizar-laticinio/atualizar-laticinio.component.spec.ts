import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarLaticinioComponent } from './atualizar-laticinio.component';

describe('AtualizarLaticinioComponent', () => {
  let component: AtualizarLaticinioComponent;
  let fixture: ComponentFixture<AtualizarLaticinioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarLaticinioComponent]
    });
    fixture = TestBed.createComponent(AtualizarLaticinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
