import React from 'react';
import StaticHeader from './StaticHeader';
// import StickyHeader from './StickyHeader';

import { getCurrentSeason } from '../../commonUtils';

import '../../styles/Header.css';

const Header = () => {
    return (
        <header>
            <StaticHeader season={getCurrentSeason()} />
            {/* <StickyHeader /> */}
        </header>
    );
};

export default Header;
