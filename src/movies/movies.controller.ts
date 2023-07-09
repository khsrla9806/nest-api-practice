import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }

    /** /:id 보다 아래 두면 search를 id로 인식한다. Nest 바보네 */
    @Get('/search')
    search(@Query('year') year: string) {
        return `영화 검색: ${year}`;
    }
    
    @Get('/:id')
    getOne(@Param('id') id: number): Movie {
        return this.movieService.getOne(id);
    }
    

    @Post()
    createMovie(@Body() movieData: CreateMovieDto) {
        return this.movieService.createMovie(movieData);
    }

    @Delete('/:id')
    deleteMovie(@Param('id') id: number) {
        return this.movieService.deleteMovie(id);
    }

    @Patch('/:id')
    updateMovie(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
        this.movieService.updateMovie(id, updateData);
    }
}
