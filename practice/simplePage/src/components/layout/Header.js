import Navigation from "src/components/utilities/Navigation";
import { useLocation } from 'react-router-dom';
import CONST from 'src/assets/const';
import 'src/css/Header.css';

function Header(props) {
    let location = useLocation().pathname.slice(1);

    return (
        <div className="Header">
            <Navigation></Navigation>
            <div className="Title ColorWhite SizeRes20">
                {CONST.ROUTER.NAME[location.toUpperCase()]}
            </div>
        </div>
    );
}

export default Header;
