import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaticiniosComponent } from './laticinios.component';

describe('LaticiniosComponent', () => {
  let component: LaticiniosComponent;
  let fixture: ComponentFixture<LaticiniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaticiniosComponent]
    });
    fixture = TestBed.createComponent(LaticiniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
