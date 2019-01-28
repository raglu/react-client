import React, { Component } from 'react';

import './upcoming-meetups.css';

class UpcomingMeetups extends Component {
    render() {
        return (
            <div className="UpcomingMeetups">
                <div class="background">
                    <h2>Upcoming meetups</h2>
                    <form>
                        <select name="sportSelect">
                            <option>any</option>
                        </select>
                        <button>Apply filters</button>
                    </form >
                    
                    <button>Previous</button >
                    <button>Next</button >

                </div >
            </div >
        );
    }
}

export default UpcomingMeetups;