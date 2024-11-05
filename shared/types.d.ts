type TypeMovie = {
  imdbId: string;
  short: {
    name: string;
    image: string;
    datePublished?: string;
    genre?: string[];
    director?: string[];
    actor?: string[];
    review?: {
      name: string;
      reviewBody: string;
    };
  };
  top: {
    titleText: {
      text: string;
    };
    plot?: {
      plotText: {
        plainText: string;
      };
    };
    runtime?: {
      displayableProperty?: {
        value?: {
          plainText?: string;
        };
      };
    };
  };
};

type TypeMovieListItem = {
  ["#IMDB_ID"]: string;
  ["#TITLE"]: string;
  ["#YEAR"]: string;
  ["#IMG_POSTER"]: string;
};

declare module "@workspace/shared/data/fetchList" {
  export function fetchList(searchTerm?: string): Promise<TypeMovieListItem[]>;
  export type MovieListItem = TypeMovieListItem;
}

declare module "@workspace/shared/data/fetchList.js" {
  export function fetchList(searchTerm?: string): Promise<TypeMovieListItem[]>;
  export type MovieListItem = TypeMovieListItem;
}

declare module "@workspace/shared/data/fetchMovie" {
  export function fetchMovie(movieId?: string): Promise<TypeMovie>;
  export type Movie = TypeMovie;
}

declare module "@workspace/shared/data/fetchMovie.js" {
  export function fetchMovie(movieId?: string): Promise<TypeMovie>;
  export type Movie = TypeMovie;
}
