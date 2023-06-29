import '../styles/FooterColumn.scss';

interface FooterContent {
    name: string;
    content: string[];
}

interface Props {
    columnData: FooterContent;
}

const FooterColumn = ({ columnData }: Props) => {
    const renderColumn = columnData.content.map(
        (item: string, index: number) => (
            <a className='column__link' href='/#' key={index}>
                {item}
            </a>
        )
    );

    return (
        <div className='column'>
            <span className='column__title'>{Object.keys(columnData)}</span>
            <div className='column__content'>{renderColumn}</div>
        </div>
    );
};

export default FooterColumn;
