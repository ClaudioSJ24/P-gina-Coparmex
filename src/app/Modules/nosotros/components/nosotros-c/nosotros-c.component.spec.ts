import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosCComponent } from './nosotros-c.component';

describe('NosotrosCComponent', () => {
  let component: NosotrosCComponent;
  let fixture: ComponentFixture<NosotrosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
