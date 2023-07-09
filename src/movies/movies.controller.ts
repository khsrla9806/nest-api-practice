import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return '전체 영화 목록 조회';
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        return `단일 영화 목록 조회: ${id}`;
    }

    @Post()
    createMovie() {
        return '영화 생성'
    }

    @Delete('/:id')
    deleteMovie(@Param('id') id: string) {
        return `영화 삭제: ${id}`;
    }

    @Patch('/:id')
    updateMovie(@Param('id') id: string) {
        return `영화 수정: ${id}`;
    }
}
