export function removeEmptyValuesInObject(obj: Object) {
    return Object.entries(obj)
        .filter(([_, v]) => v)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
}
