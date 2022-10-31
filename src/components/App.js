import Header from './Navigation/Header';
import Banner from './Banner';
import Social from './Social';
import News from './News';
import Footer from './Footer';

import { carouselData } from './data/data';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <Banner />
                <News />
                <Social data={carouselData} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
