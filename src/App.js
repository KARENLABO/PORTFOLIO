import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPrimary from './Components/MainPrimary/MainPrimary';
import OverView from './Components/Overview/Overview';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';


function App() {
    return (
        <Router >
            <Switch>
                <Route path='/' exact component={MainPrimary} />
                <Route path='/OverView' component={() => <OverView option={'overview'} />} />
                <Route path='/Resume' component={() => <Resume option={'resume'} />} />
                <Route path='/Projects' component={() => <Projects option={'projects'} />} />
            </Switch>
        </Router>
    );
}

export default App;
