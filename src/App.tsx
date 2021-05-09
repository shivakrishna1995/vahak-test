import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BiddingPage } from './containers/BiddingPage';

export const App: FC<any> = () => <Router>
    <Switch>
        <Route path='/bid/:id' component={BiddingPage} />
    </Switch>
</Router>
