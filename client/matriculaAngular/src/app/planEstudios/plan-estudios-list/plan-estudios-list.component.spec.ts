import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEstudiosListComponent } from './plan-estudios-list.component';

describe('PlanEstudiosListComponent', () => {
  let component: PlanEstudiosListComponent;
  let fixture: ComponentFixture<PlanEstudiosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanEstudiosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanEstudiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
