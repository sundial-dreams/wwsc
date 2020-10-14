import {AppContainer as ReactHotContainer} from 'react-hot-loader';
import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, useHistory, HashRouter, BrowserRouter} from 'react-router-dom';
import {createStore, Action} from 'redux';
import {useSelector, useDispatch, Provider} from 'react-redux';

import {Routers} from "./utils/constants";

import MainPage from "./main";
import MemberPage from "./member";
import TutorPage from "./tutor";

import Navigation from "./components/navigation";
import Footer from "./components/footer";

// @ts-ignore
import '~resources/style/reset.global.scss';
import '~resources/style/global.global.scss';
import ActivityPage from "./activity";
import AchievementPage from "./achievement";

function App(): React.ReactElement {

    return (
        <div id="app">
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path={Routers.MAIN} exact component={MainPage}/>
                    <Route path={Routers.MEMBER} component={MemberPage}/>
                    <Route path={Routers.TUTOR} component={TutorPage}/>
                    <Route path={Routers.ACTIVITY} component={ActivityPage}/>
                    <Route path={Routers.ACHIEVEMENT} component={AchievementPage}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

const store = createStore(() => {
});

const AppContainer = process.env.NODE_ENV === 'development' ? ReactHotContainer : Fragment;


ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    document.getElementById('app')
);