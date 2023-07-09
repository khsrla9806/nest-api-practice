import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return '전체 영화 목록 조회';
    }

    /** /:id 보다 아래 두면 search를 id로 인식한다. Nest 바보네 */
    @Get('/search')
    search(@Query('year') year: string) {
        return `영화 검색: ${year}`;
    }
    
    @Get('/:id')
    getOne(@Param('id') id: string) {
        return `단일 영화 목록 조회: ${id}`;
    }
    

    @Post()
    createMovie(@Body() movieData) {
        return movieData;
    }

    @Delete('/:id')
    deleteMovie(@Param('id') id: string) {
        return `영화 삭제: ${id}`;
    }

    @Patch('/:id')
    updateMovie(@Param('id') id: string, @Body() movieData) {
        return {
            updateMovieId: id,
            ...movieData
        }
    }
}
