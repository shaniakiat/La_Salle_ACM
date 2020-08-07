import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingTeamComponent } from './programming-team.component';

describe('ProgrammingTeamComponent', () => {
  let component: ProgrammingTeamComponent;
  let fixture: ComponentFixture<ProgrammingTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
