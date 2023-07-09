import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
    // 가짜 데이터베이스 구현
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        return this.movies.find(movie => movie.id === parseInt(id));
    }

    createMovie(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        });
    }

    deleteMovie(id: string): boolean {
        this.movies = this.movies.filter(movie => movie.id !== parseInt(id));
        return true;
    }
}
