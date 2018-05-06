import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Positions } from './components/Positions';
import { Statements } from './components/Statements';
import { IStatementRepos } from './services/IStatementRepos';
import { StatementInMemory } from './services/StatementInMemory';
import { StatementClient } from './services/StatementClient';
//import * as RoutesModule from './routes';
//let routes = RoutesModule.routes;

function renderApp() {
    //<BrowserRouter children={routes} basename={baseUrl} />
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    const repos: IStatementRepos = new StatementInMemory();

    ReactDOM.render(
        <AppContainer>
            <BrowserRouter basename={baseUrl}>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetchdata' component={FetchData} />
                    <Route path='/positions' component={Positions} />
                    <Route path='/statements'
                        render={rtProps => (<Statements routeProps={rtProps} repos={repos} />)} />
                </Layout>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
//if (module.hot) {
//    module.hot.accept('./routes', () => {
//        routes = require<typeof RoutesModule>('./routes').routes;
//        renderApp();
//    });
//}
