export class CommitSummaryDto {
    author: string;
    message: string;
    url: string;

    public static from(obj: any): CommitSummaryDto {
        const { author, commit } = obj;
        const { login: authorName } = author;
        const { message, url } = commit;
        const dto = new CommitSummaryDto();
        dto.author = authorName;
        dto.message = message;
        dto.url = url;
        return dto;
    }
}
