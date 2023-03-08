import { Injectable } from '@nestjs/common';

import { CommitSummaryDto } from './commit-summary.dto';
import { GetCommitListDto } from './get-commit-list.dto';
import { ApiClient } from './api-client';

@Injectable()
export class AppService {
  constructor(private readonly apiClient: ApiClient) { }

  async getCommitList(query: GetCommitListDto): Promise<CommitSummaryDto[]> {
    const commitListPromise = await this.apiClient.getCommitList(query);
    const { data } = commitListPromise;
    const response = [];
    data.forEach((element: any) => {
      response.push(CommitSummaryDto.from(element));
    });
    return response;
  }
}
