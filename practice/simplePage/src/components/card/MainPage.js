import Header from './Header';
import Contents from './Contents';
import CONST from 'src/assets/const';
import 'src/css/MainPage.css';

function MainPage() {
    return (
        <div className="MainPage">
            <Header title={CONST.PAGES.MOVIE}></Header>
            <Contents></Contents>
        </div>
    );
}

export default MainPage;
