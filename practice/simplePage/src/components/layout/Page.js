import Home from '../pages/Home';
import List from '../pages/List';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login';
import NotFound from "../pages/NotFound";
import Main from '../pages/Main';
import CONST from 'src/assets/const';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'src/css/layout/Page.css';

function Page() {
    let loggedIn = true;

    return (
        <div className="Page">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path={CONST.ROUTER.PATH.MAIN} component={Main}></Route>
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

export default Page;
