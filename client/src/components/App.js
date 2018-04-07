import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>New survey</h2>
const Landing = () => <h2>Landing</h2>


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route exact path="/home" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
