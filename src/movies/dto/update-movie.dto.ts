import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

/** CreateMovieDto의 PartialType으로 사용 => 부분사용이 가능 */
export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    // title, year, genres 있어도 되고 없어도 된다.
}