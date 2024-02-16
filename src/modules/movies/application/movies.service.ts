// src/movies/movies.service.ts

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/infrastructure/db/prisma/prisma.service';
import { Movie } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(
    private httpService: HttpService,
    private prismaService: PrismaService,
  ) {}

  async fetchAndSaveMovie(movieId: number): Promise<Movie> {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const movieData = response.data;

      const movie = await this.prismaService.movie.create({
        data: {
          tmdbId: movieData.id,
          title: movieData.title,
          overview: movieData.overview,
          releaseDate: movieData.release_date
            ? new Date(movieData.release_date)
            : null,
          posterPath: movieData.poster_path,
          backdropPath: movieData.backdrop_path,
          voteAverage: movieData.vote_average,
          voteCount: movieData.vote_count,
          originalLanguage: movieData.original_language,
          popularity: movieData.popularity,
        },
      });

      return movie;
    } catch (error) {
      console.error('Falha ao realizar operação:', error);
      throw new Error('Falha ao realizar operação');
    }
  }

  async getRandomMovie(): Promise<Movie> {
    const apiKey = process.env.TMDB_API_KEY;
    const movieId = Math.floor(Math.random() * 1000);
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const movieData = response.data;

      const movie = await this.prismaService.movie.create({
        data: {
          tmdbId: movieData.id,
          title: movieData.title,
          overview: movieData.overview,
          releaseDate: movieData.release_date
            ? new Date(movieData.release_date)
            : null,
          posterPath: movieData.poster_path,
          backdropPath: movieData.backdrop_path,
          voteAverage: movieData.vote_average,
          voteCount: movieData.vote_count,
          originalLanguage: movieData.original_language,
          popularity: movieData.popularity,
        },
      });

      return movie;
    } catch (error) {
      console.error('Falha ao realizar operação:', error);
      throw new Error('Falha ao realizar operação');
    }
  }

  async setMovieAsFavorite(movieId: number): Promise<Movie> {
    return this.prismaService.movie.update({
      where: { id: movieId },
      data: { favorite: true },
    });
  }
}
