import { Injectable } from '@nestjs/common';

import * as GitHub from 'github-api';

import config from './configuration';
import { GetCommitListDto } from './get-commit-list.dto';

@Injectable()
export class ApiClient {
    private gitHubRepository: any;

    constructor() {
        const { token, gitHubUsername, repoName } = config();
        const gitHubClient = new GitHub({
            token,
        });
        this.gitHubRepository = gitHubClient.getRepo(gitHubUsername, repoName);
    }

    async getCommitList(query: GetCommitListDto): Promise<any> {
        const { since } = query;
        let definedSinceDate = new Date();
        if (since) {
            definedSinceDate = new Date(since);
        }
        return await this.gitHubRepository.listCommits({ since: definedSinceDate });
    }
}
