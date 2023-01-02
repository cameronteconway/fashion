import React from 'react';
import StaticHeader from './StaticHeader';

import { getCurrentSeason } from '../../utils/commonUtils';

const Header = () => {
    return (
        <header>
            <StaticHeader season={getCurrentSeason()} />
        </header>
    );
};

export default Header;
