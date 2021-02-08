export interface DetailsResponse {
  movie: MovieDetails;
  error: boolean;
}

export interface SearchResponse {
  movies: Movie[];
  error: boolean;
}

export interface MovieDetails {
  vote_count?: number;
  overview?: string;
  title?: string;
  poster_path?: string;
  original_language?: string;
  vote_average: number;
  release_date?: string;
  id?: string;
}

export interface Movie {
  title?: string;
  poster_path?: string;
  original_language?: string;
  vote_average: number;
  release_date?: string;
  id?: string;
  onPress: () => void;
}
