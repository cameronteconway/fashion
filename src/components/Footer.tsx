import FooterColumn from './FooterColumn';
import SocialLink from './SocialLink';
import { getYear } from '../utils/commonUtils';

import '../styles/Footer.scss';

interface FooterContent {
    title: string;
    content: string[];
}

interface SocialLinks {
    id: string;
    text: string;
}

interface Props {
    data: [FooterContent[], SocialLinks[]];
}

const Footer = ({ data }: Props) => {
    const renderColumns: JSX.Element[] = data[0].map((column, index) => (
        <FooterColumn data={column} key={index} />
    ));

    const renderSocialLinks: JSX.Element[] = data[1].map((link, index) => (
        <SocialLink data={link} key={index} />
    ));

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
                            {renderSocialLinks}
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
