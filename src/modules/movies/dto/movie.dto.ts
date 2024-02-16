export class MovieDto {
  id: number;
  tmdbId: number;
  title: string;
  overview?: string;
  releaseDate?: Date;
  posterPath?: string;
  backdropPath?: string;
  voteAverage?: number;
  voteCount?: number;
  favorite: boolean;
  originalLanguage: string;
  popularity?: number;
}
