import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CommitSummaryDto } from './commit-summary.dto';
import { GetCommitListDto } from './get-commit-list.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getCommitList(@Query() query: GetCommitListDto): Promise<CommitSummaryDto[]> {
    return await this.appService.getCommitList(query);
  }
}
