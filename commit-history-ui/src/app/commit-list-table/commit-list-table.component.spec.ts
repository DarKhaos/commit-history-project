import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitListTableComponent } from './commit-list-table.component';

describe('CommitListTableComponent', () => {
  let component: CommitListTableComponent;
  let fixture: ComponentFixture<CommitListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
