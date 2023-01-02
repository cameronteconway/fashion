import { useEffect, useState } from 'react';

import img1 from '../assets/news-factory.jpg';
import img2 from '../assets/news-catwalk.jpg';
import img3 from '../assets/news-car.jpg';

const images = [img1, img2];

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/News.css';

const News = ({ data }) => {
    const renderNews = data.map((articles, index) => (
        <div className='article-container'>
            <img src={images[index]} />
            <div>
                <spam className='title'>{articles.title}</spam>
                <p className='desc'>{articles.desc}</p>
                <a className='link' href='/'>
                    Read more
                </a>
            </div>
        </div>
    ));

    return (
        <section>
            <div className='wrapper'>
                <div className='news-container-v1'>{renderNews}</div>
            </div>
        </section>
    );
};

export default News;
