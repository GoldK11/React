import Navigation from "src/components/utilities/Navigation";
// import { useLocation } from 'react-router-dom';
import CONST from 'src/assets/const';
import 'src/css/layout/Header.css';

function Header(props) {
    // let location = useLocation().pathname.slice(1);

    const mainNav = [
        { path: CONST.ROUTER.PATH.HOME, name: CONST.ROUTER.NAME.HOME },
        { path: CONST.ROUTER.PATH.WHAT, name: CONST.ROUTER.NAME.WHAT },
        { path: CONST.ROUTER.PATH.WHY, name: CONST.ROUTER.NAME.WHY },
        { path: CONST.ROUTER.PATH.HOW, name: CONST.ROUTER.NAME.HOW },
        { path: CONST.ROUTER.PATH.MYPAGE, name: CONST.ROUTER.NAME.MYPAGE },
    ];

    const subNav = [
        { path: CONST.ROUTER.PATH.LOGIN, name: CONST.ROUTER.NAME.LOGIN },
        { path: CONST.ROUTER.PATH.MAIN, name: CONST.ROUTER.NAME.MAIN },
    ];



    return (
        <div className="Header">
            <div className="Title ColorWhite">{CONST.APPLICATION}</div>
            <div className="MainNav">
                <Navigation item={mainNav}></Navigation>
            </div>
            <div className="SubNav">
                <Navigation item={subNav}></Navigation>
            </div>
        </div>
    );
}

export default Header;
