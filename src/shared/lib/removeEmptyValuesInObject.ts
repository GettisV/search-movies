import { filmArg } from 'features/GetFilms';

export function removeEmptyValuesInObject<T extends Partial<Record<string, any>>>(obj: T):T {
    return Object.entries(obj)
        .filter(([_, v]) => v)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}) as T;
}
