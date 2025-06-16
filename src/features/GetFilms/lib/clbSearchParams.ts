import { FIELDS_SEARCH_PARAMS } from '../consts/VALUES_FIELDS_SEARCH_PARAMS';

type paramsType = {
    field: FIELDS_SEARCH_PARAMS,
    value: string,
}

export const clbSearchParams = (
    prev: URLSearchParams | string,
    params: paramsType[],
    clb?: () => void,
) => {
    const newParams = new URLSearchParams(prev);

    params.forEach((parametr) => {
        newParams.set(parametr.field, parametr.value);
    });

    clb?.();

    return newParams;
};
