import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/News.css';

const News = ({ data }) => {
    const [dataIndex, setDataIndex] = useState(0);
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);
    const dataLength = data.length;

    const clickPrev = e => {
        setNextDisabled(false);
        if (dataIndex !== 0) {
            setPrevDisabled(false);
            setDataIndex(dataIndex - 1);
        }
    };

    const clickNext = e => {
        setPrevDisabled(false);
        if (dataIndex !== dataLength - 1) {
            setNextDisabled(false);
            setDataIndex(dataIndex + 1);
        }
    };

    useEffect(() => {
        if (dataIndex === 0) {
            setPrevDisabled(true);
        }
        if (dataIndex === dataLength - 1) {
            setNextDisabled(true);
        }
    }, [dataIndex]);

    return (
        <section>
            <div className='wrapper'>
                <div className='news-container'>
                    <div className='news-item'>
                        <div className='image-container'>
                            <span className='news-title news-title-mobile'>
                                MODA <span>news</span>
                            </span>
                            <img src={data[dataIndex].img} alt='test' />
                        </div>
                        <div className='news-content'>
                            <span className='news-title news-title-desktop'>
                                MODA <span>news</span>
                            </span>
                            <div className='text-arrow'>
                                <span className='article-title'>
                                    {data[dataIndex].title}
                                </span>
                                <p>{data[dataIndex].desc}</p>
                                <div className='controls'>
                                    {prevDisabled ? (
                                        <button
                                            disabled
                                            id='prev-button'
                                            aria-label='Prev Button'
                                            className='slide-button prev-button'
                                            type='button'
                                            onClick={clickPrev}
                                        >
                                            <i className='bi bi-arrow-left'></i>
                                        </button>
                                    ) : (
                                        <button
                                            id='prev-button'
                                            aria-label='Prev Button'
                                            className='slide-button prev-button'
                                            onClick={clickPrev}
                                        >
                                            <i className='bi bi-arrow-left'></i>
                                        </button>
                                    )}

                                    {nextDisabled ? (
                                        <button
                                            disabled
                                            id='next-button'
                                            aria-label='Next Button'
                                            className='slide-button next-button'
                                            onClick={clickNext}
                                        >
                                            <i className='bi bi-arrow-right'></i>
                                        </button>
                                    ) : (
                                        <button
                                            id='next-button'
                                            aria-label='Next Button'
                                            className='slide-button next-button'
                                            onClick={clickNext}
                                        >
                                            <i className='bi bi-arrow-right'></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
