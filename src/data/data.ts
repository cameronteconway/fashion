import { getCurrentSeason } from '../utils/commonUtils';

const getSeasonCollection = (): string => {
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

// Carousel
interface Carousel {
    src: string;
    alt: string;
}

export const carouselData: Carousel[] = [
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

// News
interface News {
    title: string;
    img: string;
    desc: string;
}

export const newsArticles: News[] = [
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
];

// Footer
const customerService: string[] = [
    'Contact',
    'FAQ',
    'Store Finder',
    'Sustainability',
];

const about: string[] = ['Careers', 'Size Guide'];

const delivery: string[] = [
    'UK Shipping',
    'Worldwide Shipping',
    'Returns & Refunds',
    'Track Order',
];

interface Footer {
    title: string;
    content: string[];
}

export const footerContent: Footer[] = [
    { title: 'Customer Service', content: customerService },
    { title: 'About', content: about },
    { title: 'Delivery', content: delivery },
];

interface SocialLink {
    id: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: 'instagram',
    },
    {
        id: 'linkedin',
    },
    {
        id: 'snapchat',
    },
    {
        id: 'twitter',
    },
    {
        id: 'wechat',
    },
    {
        id: 'youtube',
    },
    {
        id: 'telegram',
    },
    {
        id: 'twitch',
    },
];
