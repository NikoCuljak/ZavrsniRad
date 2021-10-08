import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Edit from './components/Edit';
import Home from './pages/Home';
import MonthlyTable from './pages/MonthlyTable'
import Report from './pages/Report';

const MainRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/monthly-table" exact component={MonthlyTable} />
            <Route path="/report" exact component={Report} />
            <Route path="/edit/:id" exact component={Edit} />
        </Switch>
    )
}

export default MainRouter;