import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import '../styles/Social.css';

const Social = ({ data }) => {
    const renderCarouselData = data.map((item, index) => {
        return (
            <div key={index}>
                <img className='carousel-image' src={item.src} alt={item.alt} />
            </div>
        );
    });

    return (
        <section>
            <div className='wrapper'>
                <div className='social-container'>
                    <span>@moda</span>
                    <div className='carousel-wrapper carousel-wrapper-mobile'>
                        <Carousel
                            infiniteLoop
                            showStatus={false}
                            showThumbs={false}
                        >
                            {renderCarouselData}
                        </Carousel>
                    </div>
                    <div className='carousel-wrapper carousel-wrapper-desktop'>
                        <Carousel
                            infiniteLoop
                            centerMode
                            centerSlidePercentage={33.36}
                            showStatus={false}
                            showThumbs={false}
                        >
                            {renderCarouselData}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Social;
