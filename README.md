# commit-history-project

## How to run the project?:
### Install NVM [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating):
- Run either command: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
- Or command: wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
- Run: nvm -v
- Run: nvm install v19.5.0
### Install Angular CLI
- Run: npm install -g @angular/cli
### Install NestJS CLI
- Run: npm install -g @nestjs/cli
### Add .env file to NestJS project
- Go to: /commit-history-backend
- Run: npm install
- Add .env file (replace &lt;password2&gt; with xrjqpdu46PlOvbvtQJ2DDWGF)<br />
TOKEN=ghp_qyhadrH9DTn9&lt;password2&gt;<br />
GITHUB_USERNAME=DarKhaos<br />
REPO_NAME=commit-history-project
### Run NestJS project
- Run: npm run start:dev
- Development server runs on port: 3000 in localhost
- Swagger path is: /api
### Run Angular project
- Go to: /commit-history-ui folder 
- Run: npm install
- Run: ng serve
- Development server runs on port: 4200 in localhost
