import React, { Component } from 'react';
import { connect } from 'react-redux';



class AddGuests extends Component {

    state = {
        invitees: []
    }

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

    //sets state of invited guests
    inviteGuest = (item) => {
        console.log(`You're invitation has been sent`);
        this.props.dispatch({ type: 'PREP_INVITEES', payload: item.id });
        // clear out state for next round


    //     console.log(item.id);
    //   this.state.invitees.push(item.id)
    //    console.log(this.state)
    }

    send = () => {
        console.log(`You're invitation has been sent`);
        this.props.dispatch({ type: 'PREP_INVITEES', payload: this.state.invitees });
        // clear out state for next round
        this.setState({
            invitees: []
        });
        console.log('remember to clear state')
    }




    render() {
        return (
            <div>

                <h1>Add Guests</h1>
                
           <ul>
            {/* {JSON.stringify(this.props.reduxStore.guests)} */}
                {this.props.reduxStore.guests.map((item, i) =>
                    <li>{item.username}<button onClick={(event) => this.inviteGuest(item)}>Invite</button></li>
                )}
                </ul>

            <button onClick={this.send}>Send</button>
                <hr />
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