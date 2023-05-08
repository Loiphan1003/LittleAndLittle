export const saveDataInLocalStorage = (name: string, data: any) => {
    return localStorage.setItem(name, JSON.stringify(data));
}

export const getDataInLocalStorage = (name: string) => {
    const getData = localStorage.getItem(name);
    try {
        if(getData === null){
            return undefined;
        }
        return JSON.parse(getData);
    } catch (error) {
        return undefined;
    }
}