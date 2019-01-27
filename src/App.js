import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

//components
import NavigationMenu from './components/navigation-menu/navigation-menu';
import Login from './components/login/login';
import Homepage from './components/homepage/homepage';
import NewMeetup from './components/new-meetup/new-meetup';
import Map from './components/map/map';
import UpcomingMeetups from './components/upcoming-meetups/upcoming-meetups';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div class="row">
            <div class="first-column">
              <NavigationMenu />
            </div>
            <div class="second-column">
              <Route exact path='/' component={Homepage} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/new-meetup' component={NewMeetup} />
              <Route exact path='/map' component={Map} />
            </div>
            <div class="third-column">
              <UpcomingMeetups />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
