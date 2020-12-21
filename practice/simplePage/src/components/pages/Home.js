import { Link } from 'react-router-dom';
import CONST from 'src/assets/const';
import 'src/css/Home.css';


function Home(props) {
    return (
        <div className="Home">
            <div className="SizeRes26">{CONST.ROUTER.NAME.HOME}</div>
            <Link className="ButtonDarken SizeRes14 ColorPrimary" to={CONST.ROUTER.PATH.LIST}>{CONST.ROUTER.NAME.LIST}{CONST.TEXT.MOVE}</Link>
        </div>
    )
}

export default Home;
