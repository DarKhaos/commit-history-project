import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommitSummaryModel } from './commit-summary.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitListTableService {
  constructor(private readonly http: HttpClient) { }

  async getCommitList(date: Date | null): Promise<CommitSummaryModel[] | undefined> {
    let params: { [param: string]: string } = {};
    if (date) {
      params['since'] = date.toISOString();
    }
    const { API_BASE_URL, COMMIT_PATH } = environment;
    return await firstValueFrom(
      this.http.get<CommitSummaryModel[]>(`${API_BASE_URL}${COMMIT_PATH}`, { params }),
    );
  }
}
