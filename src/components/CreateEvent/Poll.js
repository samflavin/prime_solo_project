import React, { Component } from 'react';
import { connect } from 'react-redux';



class Poll extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Going to add guests');

        // Then programmatically  nav back to home
        this.props.history.push('/addGuest');
    }

    handleBack = () => {
        // Do javascript fun stuff?
        alert('Going back');

        // Then programmatically  nav back to home
        this.props.history.push('/description');
    }


    render() {
        return (
            <div>

                <h1>Poll</h1>

                &nbsp;
            <button onClick={this.handleBack}>Back</button>
                &nbsp;
            <button onClick={this.handleClick}>Next</button>

            {JSON.stringify(this.props.reduxStore)}

            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Poll);