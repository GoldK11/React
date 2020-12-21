import Home from '../pages/Home';
import List from '../pages/List';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login';
import NotFound from "../pages/NotFound";
import CONST from 'src/assets/const';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'src/css/Page.css';

function Page() {
    let loggedIn = true;

    return (
        <div className="Page">
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

export default Page;
