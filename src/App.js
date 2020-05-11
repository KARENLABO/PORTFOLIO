import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPrimary from './Components/MainPrimary/MainPrimary';
import OverView from './Components/Overview/Overview';


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={MainPrimary} />
                <Route path='/OverView' component={OverView} />
                {/* <Route path='/SignUp' component={SignUp} />
                <Route path='/SignUp' component={SignUp} />
                <Route path='/SignUp' component={SignUp} /> */}
            </Switch>
        </Router>
    );
}

export default App;
