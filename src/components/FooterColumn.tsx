import '../styles/FooterColumn.scss';

interface FooterContent {
    title: string;
    content: string[];
}

interface Props {
    data: FooterContent;
}

const FooterColumn = ({ data }: Props) => {
    const renderColumn = data.content.map((item: string, index: number) => (
        <a className='column__link' href='/#' key={index}>
            {item}
        </a>
    ));

    return (
        <div className='column'>
            <span className='column__title'>{data.title}</span>
            <div className='column__content'>{renderColumn}</div>
        </div>
    );
};

export default FooterColumn;
