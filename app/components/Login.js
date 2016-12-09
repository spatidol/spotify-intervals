import React, { Component } from 'react';
import store from '../store';
import { Link } from 'react-router';

export default class Login extends Component {
  componentDidMount () {
  }
  render() {

    return (
      <div>
       <Link to="/auth/spotify">Login with Spotify </Link>
      </div>
    )
  }
}

