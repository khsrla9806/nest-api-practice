import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateMovieDto {
    @IsString()
    readonly title: string

    @IsNumber()
    readonly year: number

    @IsOptional() // 있어도 되고, 없어도 되는 정보로 설정
    @IsString({each: true}) // 배열의 모든 요소가 모두 string 타입이어야 한다.
    readonly genres: string[]
}