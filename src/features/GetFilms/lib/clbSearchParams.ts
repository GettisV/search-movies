import { URLSearchParamsInit } from 'react-router-dom';
import { FIELDS_SEARCH_PARAMS } from '../consts/VALUES_FIELDS_SEARCH_PARAMS';

type paramsType = {
    field: FIELDS_SEARCH_PARAMS,
    value: string,
}

export const clbSearchParams = (
    prev: URLSearchParams | string,
    params: paramsType[],
    clb?: () => URLSearchParamsInit,
): URLSearchParamsInit => {
    const newParams = new URLSearchParams(prev);

    clb?.();

    params.forEach((parametr) => {
        newParams.set(parametr.field, parametr.value);
    });

    return newParams;
};
