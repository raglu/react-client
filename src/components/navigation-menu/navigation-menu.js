import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class NavigationMenu extends Component {
  render() {
    return (
      <div className="Navigation-menu">
      FitnessMeetup
      <nav>
        <ul>
          <li className="first">
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New-Meetup</Link>
          </li>
          <li className="last">
            <Link to='/map'>Map</Link>
          </li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default NavigationMenu;
