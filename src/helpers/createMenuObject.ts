type ActiveMenu = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: ActiveMenu) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    };

    if (activeMenu != '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}