import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/square-necklace-bw.jpg';
import img2 from '../assets/square-bag-bw.jpg';
import img3 from '../assets/square-pose-bw.jpg';
import img4 from '../assets/square-men-bw.jpg';
import img5 from '../assets/square-dress-bw.jpg';
import img6 from '../assets/square-face-bw.jpg';
import img7 from '../assets/square-shoes-bw.jpg';

const images: string[] = [img1, img2, img3, img4, img5, img6, img7];

import '../styles/Social.scss';

interface carouselData {
    src: string;
    alt: string;
}

interface Props {
    data: carouselData[];
}

const Social = ({ data }: Props) => {
    const renderCarouselData = data.map((item: carouselData, index: number) => {
        return (
            <div key={index}>
                <img
                    className={'social-container__carousel-image'}
                    src={images[index]}
                    alt={item.alt}
                />
            </div>
        );
    });

    return (
        <section>
            <div className='wrapper'>
                <div className='social-container'>
                    <span className='social-container__title'>@moda</span>
                    <div className='social-container__carousel-wrapper social-container__carousel-wrapper--mobile'>
                        <Carousel
                            infiniteLoop
                            showStatus={false}
                            showThumbs={false}
                        >
                            {renderCarouselData}
                        </Carousel>
                    </div>
                    <div className='social-container__carousel-wrapper social-container__carousel-wrapper--desktop'>
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
