import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsOptional } from "class-validator";

export class GetCommitListDto {
    @ApiProperty({
        description: 'The date from which commits should be retrieved (ISO 8601 format).',
        required: false,
        default: '2023-01-01T00:00:00Z'
    })
    @IsDateString()
    @IsOptional()
    since?: string;
}
