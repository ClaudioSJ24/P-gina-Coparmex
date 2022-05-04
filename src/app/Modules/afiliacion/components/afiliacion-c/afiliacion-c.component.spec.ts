import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliacionCComponent } from './afiliacion-c.component';

describe('AfiliacionCComponent', () => {
  let component: AfiliacionCComponent;
  let fixture: ComponentFixture<AfiliacionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliacionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliacionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
