import Header from './components/Header';
import Banner from './components/Banner';
import News from './components/News';
import Social from './components/Social';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

import {
    carouselData,
    newsArticles,
    footerContent,
    socialLinks,
} from './data/data';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.scss';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <Banner />
                <News data={newsArticles} />
                <Social data={carouselData} />
                <SignUp />
            </main>
            <Footer data={[footerContent, socialLinks]} />
        </div>
    );
};

export default App;
