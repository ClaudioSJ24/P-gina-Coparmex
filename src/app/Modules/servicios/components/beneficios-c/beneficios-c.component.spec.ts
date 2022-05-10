import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosCComponent } from './beneficios-c.component';

describe('BeneficiosCComponent', () => {
  let component: BeneficiosCComponent;
  let fixture: ComponentFixture<BeneficiosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiosCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
