import FooterColumn from './FooterColumn';
import { getYear } from '../utils/commonUtils';

import '../styles/Footer.scss';

interface FooterContent {
    name: string;
    content: string[];
}

interface Props {
    data: FooterContent[];
}

const Footer = ({ data }: Props) => {
    const renderColumns: JSX.Element[] = data.map(
        (column: FooterContent, index: number) => (
            <FooterColumn columnData={column} key={index} />
        )
    );

    return (
        <footer className='footer-background'>
            <div className='wrapper'>
                <div className='footer'>
                    {renderColumns}
                    <div className='footer__final-column'>
                        <span className='footer__location'>
                            Location: GB (£)
                        </span>
                        <div className='footer__social-links'>
                            <a className='footer__social-link' href='/#'>
                                <i className='bi bi-instagram'></i>
                            </a>
                            <a className='footer__social-link' href='/#'>
                                <i className='bi bi-linkedin'></i>
                            </a>
                            <a className='footer__social-link' href='/#'>
                                <i className='bi bi-snapchat'></i>
                            </a>
                            <a className='footer__social-link' href='/#'>
                                <i className='bi bi-twitter'></i>
                            </a>
                            <a className='footer__social-link' href='/#'>
                                <i className='bi bi-wechat'></i>
                            </a>
                            <a className='footer__social-link' href='/#'>
                                <i className='bi bi-youtube'></i>
                            </a>
                            <a className='footer__social-link' href='/#'>
                                <i className='bi bi-telegram'></i>
                            </a>
                            <a className='footer__social-link' href='/#'>
                                <i className='bi bi-twitch'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    ©{' '}
                    <a
                        className='copyright__link'
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
