import { Controller, Get, Query, ServiceUnavailableException } from '@nestjs/common';
import { AppService } from './app.service';
import { CommitSummaryDto } from './commit-summary.dto';
import { GetCommitListDto } from './get-commit-list.dto';

@Controller({ path: 'commits' })
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) { }

  @Get()
  async getCommitList(@Query() query: GetCommitListDto): Promise<CommitSummaryDto[]> {
    try {
    return await this.appService.getCommitList(query);
    } catch (e) {
      this.logger.error(e);
      throw new ServiceUnavailableException();
    }
  }
}
