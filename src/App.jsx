import { createRoot } from 'react-dom/client';
import Header from './components/Navigation/Header';
import Banner from './components/Banner';
import News from './components/News';
import Social from './components/Social';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

import { carouselData, newsArticles, footerContent } from './data/data';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.css';

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

createRoot(document.getElementById('root')).render(<App />);
