import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import Recommend from 'Routes/Recommend';
import Portfolio from 'Routes/Portfolio';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
// import More from 'Routes/More';

export default () => (
    <Router>
        <Route
          render={({ location }) => {
            if (location.pathname.split("/")[1] !== "admin") {
              return (
                <>
                  <Header />
                </>
              );
            } else {
              return <AdminHeader></AdminHeader>;
            }
          }}
        ></Route>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recommend" exact component={Recommend} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/search" exact component={Search} />
            <Route path="/recommend/:id" exact component={Detail} />
            <Route path="/portfolio/:id" exact component={Detail} />
            <Route path="/admin" exact component={AdminMain}></Route>
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)
