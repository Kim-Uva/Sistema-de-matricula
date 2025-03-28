import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEstudiosEditComponent } from './plan-estudios-edit.component';

describe('PlanEstudiosEditComponent', () => {
  let component: PlanEstudiosEditComponent;
  let fixture: ComponentFixture<PlanEstudiosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanEstudiosEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanEstudiosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
