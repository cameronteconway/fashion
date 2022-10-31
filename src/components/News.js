import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/News.css';

const News = () => {
    return (
        <section>
            <div className='wrapper'>
                <div className='news-container'>
                    <div className='news-item'>
                        <img src='images/news-factory.jpg' alt='test' />
                        <div className='news-content'>
                            <span className='news-title'>
                                MODA <span>news</span>
                            </span>
                            <div className='text-arrow'>
                                <span className='article-title'>
                                    S22 Paris Fashion Week
                                </span>
                                <p>
                                    The Prada Spring/Summer 2023 women’s
                                    collection by Miuccia Prada and Raf Simons
                                    presents a sequence of realities -
                                    reflections, refractions, observations. For
                                    the women’s runway show, Prada invites the
                                    viewpoint of film director Nicolas Winding
                                    Refn to conceive an experience around the
                                    collection.
                                </p>
                                <div className='controls'>
                                    <button
                                        aria-label='Prev Button'
                                        className='slide-button prev-button'
                                    >
                                        <i class='bi bi-arrow-left'></i>
                                    </button>
                                    <button
                                        aria-label='Next Button'
                                        className='slide-button next-button'
                                    >
                                        <i class='bi bi-arrow-right'></i>
                                    </button>
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
