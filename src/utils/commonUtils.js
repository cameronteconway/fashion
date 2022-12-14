export const getCurrentSeason = () => {
    const dateNow = new Date();
    const monthNow = dateNow.getMonth();

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
    const dateNow = new Date();
    let yearNow = dateNow.getFullYear();
    return yearNow;
};
