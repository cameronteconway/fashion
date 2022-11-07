import FooterColumn from './FooterColumn';
import { getYear } from '../commonUtils';

import '../styles/Footer.css';

const Footer = ({ data }) => {
    const renderColumns = data.map((column, index) => (
        <FooterColumn columnData={column} key={index} />
    ));

    return (
        <footer className='footer-background section-scroll'>
            <div className='wrapper'>
                <div className='footer-container'>
                    {renderColumns}
                    <div className='final-column'>
                        <span>Location: GB (£)</span>
                        <div className='social-links'>
                            <a href='/#'>
                                <i className='bi bi-instagram'></i>
                            </a>
                            <a href='/#'>
                                <i className='bi bi-linkedin'></i>
                            </a>
                            <a href='/#'>
                                <i className='bi bi-snapchat'></i>
                            </a>
                            <a href='/#'>
                                <i className='bi bi-twitter'></i>
                            </a>
                            <a href='/#'>
                                <i className='bi bi-wechat'></i>
                            </a>
                            <a href='/#'>
                                <i className='bi bi-youtube'></i>
                            </a>
                            <a href='/#'>
                                <i className='bi bi-telegram'></i>
                            </a>
                            <a href='/#'>
                                <i className='bi bi-twitch'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    ©{' '}
                    <a
                        href='https://cameronconway.co.uk'
                        title="Go to Cameron Conway's portfolio website"
                    >
                        Cameron Conway
                    </a>{' '}
                    {getYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
