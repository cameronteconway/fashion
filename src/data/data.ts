import { getCurrentSeason } from '../utils/commonUtils';

const getSeasonCollection = () => {
    const currentSeason: string = getCurrentSeason();

    if (currentSeason === 'Spring') {
        return `Summer Collection`;
    } else if (currentSeason === 'Summer') {
        return `Autumn Collection`;
    } else if (currentSeason === 'Autumn') {
        return `Winter Collection`;
    } else {
        return `Spring Collection`;
    }
};

export const carouselData = [
    {
        src: 'square-necklace-bw.jpg',
        alt: 'Womans neck with a golden necklace',
    },
    {
        src: 'square-bag-bw.jpg',
        alt: 'Womans mid-body wearing a crop top and a large handbag',
    },
    {
        src: 'square-pose-bw.jpg',
        alt: 'Woman in a dress sat down posing to her right with her right arm stretched',
    },
    {
        src: 'square-men-bw.jpg',
        alt: 'Two lads sitting on a bench and one lad crouching down posing infront of them',
    },
    {
        src: 'square-dress-bw.jpg',
        alt: 'Woman with short hair facing to the her left',
    },
    {
        src: 'square-face-bw.jpg',
        alt: 'Man wearing a bucket hat with low light',
    },
    {
        src: 'square-shoes-bw.jpg',
        alt: 'Legs with colourful tights and shoes',
    },
];

export const newsArticles = [
    {
        title: getSeasonCollection(),
        img: 'news-catwalk.jpg',
        desc: `Our ${getSeasonCollection()} by Giana Bianchi and Emilia Esposito presents a sequence realities - reflections, refractions, observations.`,
    },
    {
        title: 'Sustainable Fashion',
        img: 'news-factory.jpg',
        desc: 'Moda understands the challanges our planet faces, this is why we employ the best practices to achieve carbon neutrality.',
    },
    // {
    //     title: 'Mercedes-Benz x Moda',
    //     img: 'news-car.jpg',
    //     desc: 'A truly unique partnership that epitomizes luxury. This collection is inspired by the shared passion for perfect design and innovation.',
    // },
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
    { name: 'Customer Service', content: customerService },
    { name: 'About', content: about },
    { name: 'Delivery', content: delivery },
];
