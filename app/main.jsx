'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import LoginContainer from './components/Login';
import SearchContainer from './components/Search';

render (
  <SearchContainer/>,
  document.getElementById('main')
)
