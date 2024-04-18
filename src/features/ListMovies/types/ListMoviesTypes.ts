interface defaultType { name: string }
interface genresType extends defaultType{}
interface countriesType extends defaultType{}

interface posterType{
    url: string,
    previewUrl: string,
}

interface ratingType{
    kp: number,
    imdb: number,
}

export interface docsType{
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
}

export interface getFilmType{
    docs: docsType[]
}

export interface getFilmArg{
    page: number,
    limit: number,
}
