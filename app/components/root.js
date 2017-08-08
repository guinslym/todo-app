import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoApp  from './todos/todo-app';

const propTypes = {
  store: PropTypes.object.isRequired,
};

const Root = ({ store }) => (
  <Provider store={store}>
    <main>
      <Router>
        <Route path="/:filter?" component={TodoApp}/>
      </Router>
    </main>
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
