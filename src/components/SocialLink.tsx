import '../styles/SocialLink.scss';

interface socialLinks {
    id: string;
}

interface Props {
    data: socialLinks;
}

const SocialLink = ({ data }: Props) => {
    return (
        <a className='social-link' href='/#'>
            <i className={`bi bi-${data.id}`}></i>
        </a>
    );
};

export default SocialLink;
