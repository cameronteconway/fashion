import Header from './Navigation/Header';
import Banner from './Banner';
import News from './News';
import Social from './Social';
import SignUp from './SignUp';
import Footer from './Footer';

import { carouselData, newsArticles, footerContent } from '../data/data';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <Banner />
                <News data={newsArticles} />
                <Social data={carouselData} />
                <SignUp />
            </main>
            <Footer data={footerContent} />
        </div>
    );
};

export default App;
