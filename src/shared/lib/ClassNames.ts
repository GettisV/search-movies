type AdditionalType = (string | undefined)[];

type ModsType = Record<string, boolean> | undefined

export function ClassNames(
    cls?: string,
    mods?: ModsType,
    additional?: AdditionalType,
) {
    return (`${
        cls && cls
    } ${
        mods && Object
            .entries(mods)
            .filter(([_, value]) => value)
            .map(([key, _]) => key).join(' ')
    } ${
        additional && additional.filter((value) => value).join(' ')
    }`);
}
