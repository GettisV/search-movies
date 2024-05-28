interface countriesType { name: string }
interface genresType { name: string }

interface posterType{
    url: string,
    previewUrl: string,
}

export interface ratingType{
    kp: number,
    imdb: number,
}

interface persons{
    name: string;
    photo: string;
}

interface trailersType{
    url: string;
    name: string;
}

interface videosType{
    trailers: trailersType[];
}

interface backdropType{
    url: string;
    previewUrl: string;
}

export interface filmDetailsResponseServerType {
    id: number;
    name: string;
    ageRating: number;
    alternativeName: string;
    countries: countriesType[];
    description: string;
    genres: genresType[];
    movieLength: number;
    persons: persons[];
    rating: ratingType;
    poster: posterType;
    videos: videosType;
    backdrop: backdropType;
    year: number;
    type: string;
    seriesLength: number;
}
