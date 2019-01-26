import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import NavigationMenu from './components/navigation-menu/navigation-menu';
import Login from './components/login/login';
import Homepage from './components/homepage/homepage';
import NewMeetup from './components/new-meetup/new-meetup';
import Map from './components/map/map';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-sm-3 noPadding'>
                <NavigationMenu />
              </div>
              <div class='col-sm-7 noPadding body-content'>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/new-meetup' component={NewMeetup} />
                <Route exact path='/map' component={Map} />
              </div>
              <div class="col-sm-2 noPadding">
                
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
