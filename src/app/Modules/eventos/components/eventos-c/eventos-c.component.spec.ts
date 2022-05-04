import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCComponent } from './eventos-c.component';

describe('EventosCComponent', () => {
  let component: EventosCComponent;
  let fixture: ComponentFixture<EventosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
