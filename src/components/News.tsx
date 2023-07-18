import { LazyLoadImage } from 'react-lazy-load-image-component';

import img1 from '../assets/news-catwalk.jpg';
import img2 from '../assets/news-factory.jpg';

const images: string[] = [img1, img2];

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/News.scss';

interface newsArticles {
    title: string;
    img: string;
    desc: string;
}

interface Props {
    data: newsArticles[];
}

const News = ({ data }: Props) => {
    const renderNews = data.map((articles: newsArticles, index: number) => (
        <article className='article' key={index}>
            <LazyLoadImage
                className='article__img'
                src={images[index]}
                loading='lazy'
            />
            <div>
                <span className='article__title'>{articles.title}</span>
            </div>
        </article>
    ));

    return (
        <section>
            <div className='wrapper'>
                <div className='news-container'>{renderNews}</div>
            </div>
        </section>
    );
};

export default News;
