interface defaultType { name: string }
interface countriesType extends defaultType{}

interface genresType<T>{
    name: T,
}

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
    genres: genresType<string>[],
    countries: countriesType[],
    alternativeName: string,
    ageRating: number,
}

export interface filmResponseServerType{
    docs: filmTypeResponseServer[]
}
