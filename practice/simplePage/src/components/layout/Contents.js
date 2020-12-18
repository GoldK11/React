import Home from '../contents/Home';
import List from '../contents/List';
import MyPage from '../contents/MyPage';
import Login from '../contents/Login';
import NotFound from "../contents/NotFound";
import CONST from 'src/assets/const';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'src/css/Contents.css';

function Contents() {
    let loggedIn = true;

    return (
        <div className="Contents">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path={CONST.ROUTER.PATH.LIST} component={List}></Route>
                <Route path={CONST.ROUTER.PATH.MYPAGE}>
                    {loggedIn ? <MyPage></MyPage> : <Redirect to={CONST.ROUTER.PATH.LOGIN} />}
                </Route>
                <Route path={CONST.ROUTER.PATH.LOGIN} component={Login}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    );
}

export default Contents;
