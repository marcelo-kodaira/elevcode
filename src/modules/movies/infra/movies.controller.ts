import { Controller, Patch, Param, ParseIntPipe, Get } from '@nestjs/common';
import { MoviesService } from '../application/movies.service';
import { MovieDto } from '../dto/movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get(':id')
  getMovieById(@Param('id', ParseIntPipe) id: number): Promise<MovieDto> {
    return this.moviesService.fetchAndSaveMovie(id);
  }

  @Patch(':id/favorite')
  setMovieAsFavorite(@Param('id', ParseIntPipe) id: number): Promise<MovieDto> {
    return this.moviesService.setMovieAsFavorite(id);
  }

  @Get(':id')
  getRandomMovie() {
    return this.moviesService.getRandomMovie();
  }
}
