import '../styles/FooterColumn.css';

const FooterColumn = ({ columnData }) => {
    console.log(Object.values(columnData));
    const renderColumn = Object.values(columnData)[0].map((item, index) => (
        <a href='#' key={index}>
            {item}
        </a>
    ));

    return (
        <div className='footer-column'>
            <span className='footer-column-title'>
                {Object.keys(columnData)}
            </span>
            <div className='footer-column-content'>{renderColumn}</div>
        </div>
    );
};

export default FooterColumn;
