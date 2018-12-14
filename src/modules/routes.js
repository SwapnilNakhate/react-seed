import React from 'react';
import { Route, browserHistory } from 'react-router';
import App from './../App';
import HomeComponent from './FunctionalModule/HomeComponent/HomeComponent';
import AboutComponent from "./FunctionalModule/AboutComponent/AboutComponent";
import ContactUsComponent from "./FunctionalModule/ContactUsComponent/ContactUsComponent";
import PageNotFoundComponent from "./AppModule/PageNotFound/PageNotFoundComponent";

export default (
    <Route path="/" history={browserHistory} component={App}>
    <Route path="home" component={HomeComponent} />
    <Route path="about" component={AboutComponent} />
    <Route path="contact" component={ContactUsComponent} />
    <Route path="*" component={PageNotFoundComponent} />
    </Route>
);
