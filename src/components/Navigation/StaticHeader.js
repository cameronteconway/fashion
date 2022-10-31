import React from 'react';
import '../../styles/StaticHeader.css';

const StaticHeader = ({ season }) => {
    return (
        <div id='static-header'>
            <div className='header-wrapper'>
                <a href='#home' className='logo'>
                    <h1>MODA</h1>
                </a>
                <input
                    type='checkbox'
                    name='toggle'
                    id='toggle'
                    className='nav-toggle'
                />
                <label className='nav-toggle-label' for='toggle'>
                    <div className='hamburger'>
                        <span className='bar bar1'></span>
                        <span className='bar bar2'></span>
                        <span className='bar bar3'></span>
                        <span className='bar bar4'></span>
                        <span className='bar bar5'></span>
                    </div>
                </label>

                <nav id='primary-nav' className='toggle'>
                    <ul className='top-level-content'>
                        <li>
                            <a href='#'>Men</a>
                        </li>
                        <li>
                            <a href='#'>Women</a>
                        </li>
                        <li>
                            <a href='#'>Handbags</a>
                        </li>
                        <li>
                            <a href='#'>Beauty</a>
                        </li>
                        <li>
                            <a href='#'>What's New</a>
                        </li>
                        <li>
                            <a href='#'>Gifts</a>
                        </li>
                        <li>
                            <a href='#'>{`${season} collection`}</a>
                        </li>
                        <li>
                            <div className='user-extra user-extra-mobile'>
                                <span>
                                    <a href='#'>
                                        <i class='bi bi-person-circle'></i>
                                    </a>
                                </span>
                                <span>
                                    <a href='#'>
                                        <i class='bi bi-geo-alt-fill'></i>
                                    </a>
                                </span>
                                <span>
                                    <a href='#'>
                                        <i class='bi bi-bag-fill'></i>
                                    </a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className='user-extra user-extra-desktop'>
                    <span>
                        <a href='#'>
                            <i class='bi bi-person-circle'></i>
                        </a>
                    </span>
                    <span>
                        <a href='#'>
                            <i class='bi bi-geo-alt-fill'></i>
                        </a>
                    </span>
                    <span>
                        <a href='#'>
                            <i class='bi bi-bag-fill'></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StaticHeader;
