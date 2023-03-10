import { Component, ViewChild } from '@angular/core';
import { CommitListTableComponent } from './commit-list-table/commit-list-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CommitListTableComponent) childComponent!: CommitListTableComponent;

  loading = false;

  latestDate: Date | null = null;

  updateTable(): void {
    const currentLatestDate = new Date();
    this.childComponent.getCommitList(this.latestDate);
    this.latestDate = currentLatestDate;
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
  }
}
