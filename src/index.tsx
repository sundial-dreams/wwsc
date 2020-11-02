import {AppContainer as ReactHotContainer} from 'react-hot-loader';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, HashRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import {Routers} from "./utils/constants";
import {reducer} from "./utils/redux";

import MainPage from "./main";
import MemberPage from "./member";
import TutorPage from "./tutor";
import ActivityPage from "./activity";
import AchievementPage from "./achievement";
import GraduatePage from "./graduate";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Banner from "./components/banner";

// @ts-ignore
import '~resources/style/reset.global.scss';
import '~resources/style/global.global.scss';


function App(): React.ReactElement {

    return (
        <div id="app">
            <HashRouter>
                <Navigation/>
                <Switch>
                    <Route path={Routers.MAIN} exact component={MainPage}/>
                    <Route path={Routers.MEMBER} component={MemberPage}/>
                    <Route path={Routers.TUTOR} component={TutorPage}/>
                    <Route path={Routers.ACTIVITY} component={ActivityPage}/>
                    <Route path={Routers.ACHIEVEMENT} component={AchievementPage}/>
                    <Route path={Routers.GRADUATE} component={GraduatePage}/>
                </Switch>
                <Footer/>
                <Banner/>
            </HashRouter>
        </div>
    );
}

const store = createStore(reducer);

const AppContainer = process.env.NODE_ENV === 'development' ? ReactHotContainer : Fragment;

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);