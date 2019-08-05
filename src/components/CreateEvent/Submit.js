import React, { Component } from 'react';


class Submit extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Congratulations Youve just created a new event!');

        // Then programmatically  nav back to home
        this.props.history.push('/home');
    }

    handleBack = () => {
        // Do javascript fun stuff?
        alert('Going back');

        // Then programmatically  nav back to home
        this.props.history.push('/addGuest');
    }
    render() {
        return (
            <div>

                <h1>Review and Submit</h1>

                &nbsp;
            <button onClick={this.handleBack}>Back</button>
                &nbsp;
            <button onClick={this.handleClick}>CONFIRM</button>


            </div>
        )
    }
}

export default Submit;