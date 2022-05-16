import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSComponent } from './redes-s.component';

describe('RedesSComponent', () => {
  let component: RedesSComponent;
  let fixture: ComponentFixture<RedesSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
