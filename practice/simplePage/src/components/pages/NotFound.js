import { Link } from 'react-router-dom';
import CONST from 'src/assets/const';
import 'src/css/pages/NotFound.css';

function NotFound(props) {
    return (
        <div className="NotFound">
            <div className="SizeRes26">{CONST.TEXT.NOT_FOUND}</div>
            <Link className="ButtonDarken SizeRes14 ColorPrimary" to="/">{CONST.ROUTER.NAME.HOME}{CONST.TEXT.MOVE}</Link>
        </div>
    )
}

export default NotFound;
