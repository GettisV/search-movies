export function findDuplicates(mainArray: any[], arr2: any[]) {
    let counter = 0;

    mainArray.forEach((mainArrayItem) => {
        arr2.forEach((item) => {
            if (mainArrayItem.id === item.id) counter += 1;
        });
    });

    return !!counter;
}
