import { Injectable } from '@nestjs/common';

import * as GitHub from 'github-api';

import config from './configuration';

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

    async getCommitList(since: Date): Promise<any> {
        return await this.gitHubRepository.listCommits({ since });
    }
}
