import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    // 가짜 데이터베이스 구현
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new NotFoundException("존재하지 않는 영화 정보: " + id);
        }
        return movie;
    }

    createMovie(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        });
    }

    deleteMovie(id: number) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    updateMovie(id: number, updateData: UpdateMovieDto) {
        const movie = this.getOne(id);
        this.deleteMovie(id);
        this.movies.push({
            ...movie, // 기존 데이터에
            ...updateData // 변경 데이터를 가져와서 덮어쓴다.
        });
    }
}
