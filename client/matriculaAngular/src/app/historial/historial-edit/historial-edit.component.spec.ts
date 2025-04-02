import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEditComponent } from './historial-edit.component';

describe('HistorialEditComponent', () => {
  let component: HistorialEditComponent;
  let fixture: ComponentFixture<HistorialEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
