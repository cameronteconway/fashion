import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <img
                src={require('../assets/banner-woman-low-quality.jpg')}
                alt='Woman in coat posing'
            />
        </div>
    );
};

export default Banner;
