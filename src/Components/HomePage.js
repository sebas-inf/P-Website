//Components
import Header from './Header';
import Introduction from './Introduction';
import Experiences from './Experiences';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Certifications from './Certifications';

const HomePage = () => {
    return (
        <div class="App">
            <Header/>
            <Introduction/>
            <Experiences/>
            <Certifications/>
            <Portfolio/>
            <Contacts/>
        </div>
    )
}

export default HomePage;