export const getCurrentSeason = () => {
    const dateNow: Date = new Date();
    const monthNow: number = dateNow.getMonth();

    if (monthNow === 2 || monthNow === 3 || monthNow === 4) {
        return 'Spring';
    } else if (monthNow === 5 || monthNow === 6 || monthNow === 7) {
        return 'Summer';
    } else if (monthNow === 8 || monthNow === 9 || monthNow === 10) {
        return 'Autumn';
    } else {
        return 'Winter';
    }
};

export const getYear = () => {
    const dateNow: Date = new Date();
    const yearNow: number = dateNow.getFullYear();
    return yearNow;
};
