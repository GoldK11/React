import { Link } from 'react-router-dom';
import CONST from 'src/assets/const';
import 'src/css/NotFound.css';

function NotFound(props) {
    return (
        <div className="NotFound">
            <div>{CONST.PLACEHOLDER.NOT_FOUND}</div>
            <Link className="RedirecLink" to="/">{CONST.ROUTER.NAME.HOME}{CONST.PLACEHOLDER.REDIRECT}</Link>
        </div>
    )
}

export default NotFound;