import { ApiProperty } from "@nestjs/swagger";

export class CommitSummaryDto {
    @ApiProperty({ description: 'Commit ID' })
    id: string;

    @ApiProperty({ description: 'Author name' })
    author: string;

    @ApiProperty({ description: 'Commit message' })
    message: string;

    @ApiProperty({ description: 'Commit URL' })
    url: string;

    public static from(obj: any): CommitSummaryDto {
        const { sha: id, author, commit } = obj;
        const { login: authorName } = author;
        const { message, url } = commit;
        const dto = new CommitSummaryDto();
        dto.id = id;
        dto.author = authorName;
        dto.message = message;
        dto.url = url;
        return dto;
    }
}
