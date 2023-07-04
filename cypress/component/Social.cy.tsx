import Social from '../../src/components/Social';
import { carouselData } from '../../src/data/data';

interface Slides {
    src: string;
    alt: string;
}

interface RandomSlides {
    index: number;
    element: Slides;
}

// Get three random slides to test
const threeRandomSlides = (carouselData: Slides[]): RandomSlides[] => {
    // Get three random unique indexes and store in randomIndexes
    const randomIndexes: number[] = [];
    while (randomIndexes.length < 3) {
        const r = Math.floor(Math.random() * 7);
        if (!randomIndexes.includes(r)) {
            randomIndexes.push(r);
        }
    }

    // Loop over the random indexes and for each random index push it
    // and the slide of that index in carouselData to randomSlides
    const randomSlides: RandomSlides[] = [];
    for (let i = 0; i < randomIndexes.length; i++) {
        randomSlides.push({
            index: randomIndexes[i],
            element: carouselData[randomIndexes[i]],
        });
    }

    return randomSlides;
};

describe('<Social />', () => {
    const test: RandomSlides[] = threeRandomSlides(carouselData);
    it('renders', () => {
        cy.mount(<Social data={carouselData} />);
    });
    it('On render, first dot selected', () => {
        cy.mount(<Social data={carouselData} />);
        cy.get('ul.control-dots')
            .find('li:nth-child(1)')
            .should('have.class', 'selected');
    });
    it(`Correct random slider shown: slide ${test[0].index + 1}`, () => {
        cy.mount(<Social data={carouselData} />);
        cy.get(`ul.control-dots li`).eq(test[0].index).click({
            force: true,
        });
        cy.get('ul.slider li.selected')
            .find('img')
            .should('have.attr', 'alt', test[0].element.alt);
    });
    it(`Correct random slider shown: slide ${test[1].index + 1}`, () => {
        cy.mount(<Social data={carouselData} />);
        cy.get(`ul.control-dots li`).eq(test[1].index).click({
            force: true,
        });
        cy.get('ul.slider li.selected')
            .find('img')
            .should('have.attr', 'alt', test[1].element.alt);
    });
    it(`Correct random slider shown: slide ${test[2].index + 1}`, () => {
        cy.mount(<Social data={carouselData} />);
        cy.get(`ul.control-dots li`).eq(test[2].index).click({
            force: true,
        });
        cy.get('ul.slider li.selected')
            .find('img')
            .should('have.attr', 'alt', test[2].element.alt);
    });
});
