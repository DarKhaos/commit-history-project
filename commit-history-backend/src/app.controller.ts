import { Controller, Get, Logger, Query, ServiceUnavailableException } from '@nestjs/common';
import { AppService } from './app.service';
import { CommitSummaryDto } from './commit-summary.dto';
import { GetCommitListDto } from './get-commit-list.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Commits')
@Controller({ path: 'commits' })
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) { }

  @ApiResponse({ status: 200, description: 'Get list of project commits.' })
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
