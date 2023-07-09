import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
    // 가짜 데이터베이스 구현
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        const movie = this.movies.find(movie => movie.id === parseInt(id));
        if (!movie) {
            throw new NotFoundException("존재하지 않는 영화 정보: " + id);
        }
        return movie;
    }

    createMovie(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        });
    }

    deleteMovie(id: string) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== parseInt(id));
    }

    updateMovie(id: string, updateData) {
        const movie = this.getOne(id);
        this.deleteMovie(id);
        this.movies.push({
            ...movie, // 기존 데이터에
            ...updateData // 변경 데이터를 가져와서 덮어쓴다.
        });
    }
}
