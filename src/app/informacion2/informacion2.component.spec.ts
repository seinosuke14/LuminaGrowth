import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacion2Component } from './informacion2.component';

describe('Informacion2Component', () => {
  let component: Informacion2Component;
  let fixture: ComponentFixture<Informacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Informacion2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
