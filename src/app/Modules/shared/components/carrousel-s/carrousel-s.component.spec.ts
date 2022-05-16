import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselSComponent } from './carrousel-s.component';

describe('CarrouselSComponent', () => {
  let component: CarrouselSComponent;
  let fixture: ComponentFixture<CarrouselSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
