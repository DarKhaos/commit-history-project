import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommitSummaryModel } from './commit-summary.model';
import { CommitListTableService } from './commit-list-table.service';

@Component({
  selector: 'app-commit-list-table',
  templateUrl: './commit-list-table.component.html',
  styleUrls: ['./commit-list-table.component.css']
})
export class CommitListTableComponent implements OnInit {
  commitList: CommitSummaryModel[] | undefined = [];

  selectedRowId: string | null = null;
  
  @Output() loadingEvent = new EventEmitter<boolean>();

  constructor(private readonly service: CommitListTableService) { }

  async getCommitList(date: Date | null): Promise<void> {
    this.loadingEvent.emit(true);
    const currentCommitList = await this.service.getCommitList(date);
    if (currentCommitList && this.commitList) {
      this.commitList = [...currentCommitList, ...this.commitList];
    }
    this.loadingEvent.emit(false);
  }

  async ngOnInit(): Promise<void> {
    this.getCommitList(null);
  }

  selectRow(id: string | null): void {
    this.selectedRowId = id;
  }
}
