import { getCurrentSeason } from '../utils/commonUtils';

import '../styles/Header.scss';

const Header = () => {
    return (
        <header>
            <div className='header header-wrapper'>
                <a href='#home' className='header__logo-link'>
                    <h1 className='header__logo'>MODA</h1>
                </a>
                <input
                    type='checkbox'
                    name='toggle'
                    id='toggle'
                    className='header__nav-toggle'
                />
                <label className='header__hamburger-label' htmlFor='toggle'>
                    <div className='hamburger'>
                        <span className='hamburger__bar hamburger__bar1'></span>
                        <span className='hamburger__bar hamburger__bar2'></span>
                        <span className='hamburger__bar hamburger__bar3'></span>
                        <span className='hamburger__bar hamburger__bar4'></span>
                        <span className='hamburger__bar hamburger__bar5'></span>
                    </div>
                </label>

                <nav className='toggle navigation'>
                    <ul className='navigation__items'>
                        <li className='navigation__item'>
                            <a className='navigation__link' href='/#'>
                                Men
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href='/#'>
                                Women
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href='/#'>
                                Handbags
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href='/#'>
                                Beauty
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href='/#'>
                                What's New
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href='/#'>
                                Gifts
                            </a>
                        </li>
                        <li className='navigation__item'>
                            <a
                                className='navigation__link'
                                href='/#'
                            >{`${getCurrentSeason()} collection`}</a>
                        </li>
                        <li className='navigation__item'>
                            <div className='user-extra user-extra--mobile'>
                                <span>
                                    <a className='user-extra__link' href='/#'>
                                        <i className='bi bi-person-circle'></i>
                                    </a>
                                </span>
                                <span>
                                    <a className='user-extra__link' href='/#'>
                                        <i className='bi bi-geo-alt-fill'></i>
                                    </a>
                                </span>
                                <span>
                                    <a className='user-extra__link' href='/#'>
                                        <i className='bi bi-bag-fill'></i>
                                    </a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className='user-extra user-extra--desktop'>
                    <span>
                        <a className='user-extra__link' href='/#'>
                            <i className='bi bi-person-circle'></i>
                        </a>
                    </span>
                    <span>
                        <a className='user-extra__link' href='/#'>
                            <i className='bi bi-geo-alt-fill'></i>
                        </a>
                    </span>
                    <span>
                        <a className='user-extra__link' href='/#'>
                            <i className='bi bi-bag-fill'></i>
                        </a>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
