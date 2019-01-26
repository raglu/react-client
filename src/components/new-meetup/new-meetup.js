import React, { Component } from 'react';

class NewMeetup extends Component {
    render() {
        return (
            <div className="new-meetup"><div class="container">

                <h1>New Meetup</h1>

                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" name="titleBox" />
                </div>

                <div class="form-group">
                    <label for="name">Description</label>
                    <input type="text" class="form-control" name="descriptionBox " id="description" />
                </div>

                <div class="form-group">
                    <label for="date"> Date</label>
                    <input type="datetime-local" id="date" name="datePicker" />
                </div>

                <div class="form-group">
                    <select name="sportSelect" class="form-control">
                        <option>any</option>
                    </select>
                </div>
                <button name="submitButton" type="submit">Submit</button>
            </div>
            </div>
        );
    }
}

export default NewMeetup;
