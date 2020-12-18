import { Link } from 'react-router-dom';
import CONST from 'src/assets/const';
import 'src/css/Home.css';

function Home(props) {
    return (
        <div className="Home">
            <div>{CONST.ROUTER.NAME.HOME}</div>
            <Link className="RedirecLink" to={CONST.ROUTER.PATH.LIST}>{CONST.ROUTER.NAME.LIST}{CONST.PLACEHOLDER.REDIRECT}</Link>
        </div>
    )
}

export default Home;
