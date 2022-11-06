import FooterColumn from './FooterColumn';
import '../styles/Footer.css';

const Footer = ({ data }) => {
    const renderColumns = data.map((column, index) => (
        <FooterColumn columnData={column} key={index} />
    ));

    return (
        <div className='footer-background'>
            <div className='wrapper'>
                <div className='footer-container'>{renderColumns}</div>
            </div>
        </div>
    );
};

export default Footer;
