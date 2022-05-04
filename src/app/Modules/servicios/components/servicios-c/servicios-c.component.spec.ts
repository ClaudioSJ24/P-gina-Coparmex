import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCComponent } from './servicios-c.component';

describe('ServiciosCComponent', () => {
  let component: ServiciosCComponent;
  let fixture: ComponentFixture<ServiciosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
