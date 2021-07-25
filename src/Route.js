import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import NotFound from './utils/NotFound';
import { connect } from 'react-redux';
import Home from './components/home';
import Today from './components/today';
import All from './components/all';

class CustomRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/todo" />
            <Route exact path="/todo" component={Home} />
            <Route exact path="/todo/today" component={Today} />
            <Route exact path="/todo/all" component={All} />
            <Route exact path="/todo/pending" component={All} />
            <Route exact path="/todo/abandon" component={All} />
            <Route exact path="/todo/completed" component={All} />
            <Route exact path="/todo/inprogress" component={All} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomRoute);
