interface countriesType { name: string }
interface genresType { name: string }

interface posterType{
    url: string,
    previewUrl: string,
}

interface ratingType{
    kp: number,
    imdb: number,
}

export interface filmTypeResponseServer{
    rating: ratingType,
    movieLength: number,
    id: number,
    type: string,
    name: string,
    description: string,
    shortDescription: string,
    year: number,
    poster: posterType,
    genres: genresType[],
    countries: countriesType[],
    alternativeName: string,
    ageRating: number,
    seriesLength: number,
}

export interface filmResponseServerType{
    docs: filmTypeResponseServer[]
}
