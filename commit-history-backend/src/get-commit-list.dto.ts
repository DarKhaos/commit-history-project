import { IsDateString, IsOptional } from "class-validator";

export class GetCommitListDto {
    @IsDateString()
    @IsOptional()
    since?: string;
}
