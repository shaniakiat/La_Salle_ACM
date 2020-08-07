import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsDepartmentComponent } from './cs-department.component';

describe('CsDepartmentComponent', () => {
  let component: CsDepartmentComponent;
  let fixture: ComponentFixture<CsDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
