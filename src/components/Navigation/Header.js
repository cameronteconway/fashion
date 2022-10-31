import React from 'react';
import StaticHeader from './StaticHeader';
import StickyHeader from './StickyHeader';

import '../../styles/Header.css';

const getCurrentSeason = () => {
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

const Header = () => {
    return (
        <header>
            <StaticHeader season={getCurrentSeason()} />
            {/* <StickyHeader /> */}
        </header>
    );
};

export default Header;
