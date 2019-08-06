import React, { Component } from 'react';


class AddGuests extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_GUESTS' })
    }

    handleClick = () => {
        // Then programmatically  nav back to home
        this.props.history.push('/submit');
    }

    handleBack = () => {
    
        // Then programmatically  nav back to poll
        this.props.history.push('/poll');
    }



    render() {
        return (
            <div>

                <h1>Add Guests</h1>

                &nbsp;
            <button onClick={this.handleBack}>Back</button>
                &nbsp;
            <button onClick={this.handleClick}>Next</button>

            </div>
        )
    }
}

export default AddGuests;