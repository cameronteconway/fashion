import { getCurrentSeason } from '../utils/commonUtils';

const getSeasonCollection = () => {
    const currentSeason = getCurrentSeason();
    const currentYear = new Date().getFullYear();

    if (currentSeason === 'Spring') {
        return `${currentYear} Summer collection`;
    } else if (currentSeason === 'Summer') {
        return `${currentYear} Autumn collection`;
    } else if (currentSeason === 'Autumn') {
        return `${currentYear} Winter collection`;
    } else {
        return `${currentYear} Sprint collection`;
    }
};

export const carouselData = [
    {
        src: require('../assets/square-necklace-bw.jpg'),
        alt: 'Shot of a womans neck with a golden necklace',
    },
    {
        src: require('../assets/square-bag-bw.jpg'),
        alt: 'Shot of a womans neck with a golden necklace',
    },
    {
        src: require('../assets/square-pose-bw.jpg'),
        alt: 'Shot of a womans neck with a golden necklace',
    },
    {
        src: require('../assets/square-men-bw.jpg'),
        alt: 'Shot of a womans neck with a golden necklace',
    },
    {
        src: require('../assets/square-dress-bw.jpg'),
        alt: 'Shot of a womans neck with a golden necklace',
    },
    {
        src: require('../assets/square-face-bw.jpg'),
        alt: 'Shot of a womans neck with a golden necklace',
    },
    {
        src: require('../assets/square-shoes-bw.jpg'),
        alt: 'Legs with colourful tights and shoes',
    },
];

export const newsArticles = [
    {
        title: getSeasonCollection(),
        img: require('../assets/news-catwalk-low-quality.jpg'),
        desc: `Our ${getSeasonCollection()} by Giana Bianchi and Emilia Esposito presents a sequence realities - reflections, refractions, observations.`,
    },
    {
        title: 'Sustainable Fashion',
        img: require('../assets/news-factory.jpg'),
        desc: 'Moda understands the challanges our planet faces, this is why we employ the best practices to achieve carbon neutrality.',
    },
    {
        title: 'Mercedes-Benz x Moda',
        img: require('../assets/news-car.jpg'),
        desc: 'A truly unique partnership that epitomizes luxury. This collection is inspired by the shared passion for perfect design and innovation.',
    },
];

const customerService = ['Contact', 'FAQ', 'Store Finder', 'Sustainability'];

const about = ['Careers', 'Size Guide'];

const delivery = [
    'UK Shipping',
    'Worldwide Shipping',
    'Returns & Refunds',
    'Track Order',
];

export const footerContent = [
    { 'Customer Service': customerService },
    { About: about },
    { Delivery: delivery },
];
