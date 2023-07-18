import '../styles/SocialLink.scss';

interface socialLinks {
    id: string;
    text: string;
}

interface Props {
    data: socialLinks;
}

const SocialLink = ({ data }: Props) => {
    return (
        <a className='social-link' aria-label={data.text} href='/#'>
            <i className={`bi bi-${data.id}`}></i>
        </a>
    );
};

export default SocialLink;
