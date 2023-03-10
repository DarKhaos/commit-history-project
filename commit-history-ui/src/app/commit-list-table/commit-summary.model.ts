export class CommitSummaryModel {
    id: string;
    author: string;
    message: string;
    url: string;

    constructor() {
        this.id = '';
        this.author = '';
        this.message = '';
        this.url = '';
    }

    static from(obj: any): CommitSummaryModel {
        const { id, author, description, url } = obj;
        const model = new CommitSummaryModel();
        model.id = id;
        model.author = author;
        model.message = description;
        model.url = url;
        return model;
    }
}
