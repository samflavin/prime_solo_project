import React, { Component } from 'react';
import { connect } from 'react-redux';



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
    inviteGuest = (event) => {
        console.log(this.item.id)
    }



    render() {
        return (
            <div>

                <h1>Add Guests</h1>
                
           <ul>
            {/* {JSON.stringify(this.props.reduxStore.guests)} */}
                {this.props.reduxStore.guests.map((item, i) =>
                    <li>{item.username}<button onClick={this.inviteGuest}>Invite</button></li>
                )}
                </ul>


                &nbsp;
            <button onClick={this.handleBack}>Back</button>
                &nbsp;
            <button onClick={this.handleClick}>Next</button>

            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(AddGuests);