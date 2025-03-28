import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEditComponent } from './cursos-edit.component';

describe('CursosEditComponent', () => {
  let component: CursosEditComponent;
  let fixture: ComponentFixture<CursosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
