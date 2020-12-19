import { NavLink } from 'react-router-dom';
import CONST from 'src/assets/const';
import 'src/css/Navigation.css';

function Navigation(props) {

    return (
        <div className="Navigation">
            <NavLink className="NavItem ColorWhite Button Size14" exact to="/">{CONST.ROUTER.NAME.HOME}</NavLink>
            <NavLink className="NavItem ColorWhite Button Size14" to={CONST.ROUTER.PATH.MYPAGE}>{CONST.ROUTER.NAME.MYPAGE}</NavLink>
            <NavLink className="NavItem ColorWhite Button Size14" to={CONST.ROUTER.PATH.LOGIN}>{CONST.ROUTER.NAME.LOGIN}</NavLink>
        </div>
    );
}

export default Navigation;
