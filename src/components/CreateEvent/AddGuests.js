import React, { Component } from 'react';
import { connect } from 'react-redux';



class AddGuests extends Component {

    state = {
        invitees: [],
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_GUESTS' })
        console.log(this.props.reduxStore.event)
    }

    handleClick = () => {
        // Then programmatically  nav back to home
        this.props.history.push(`/submit/${this.props.reduxStore.event}`);
    }

    handleBack = () => {
    
        // Then programmatically  nav back to poll
        this.props.history.push('/poll');
    }

    //sets state of invited guests
    inviteGuest = (item) => {
        console.log(`You're invitation has been sent`, item);
        this.props.dispatch({ type: 'PREP_INVITEES', payload:{ eventId: this.props.reduxStore.poll[0].eventId, userId: item.id}});
    }
    // item.id 
    uninviteGuest = (item) => {
        console.log(`You're invitation has been revoked`);
        this.props.dispatch({ type: 'ALTER_INVITEES', payload: { eventId: this.props.reduxStore.event, userId: item.id } });
    }


    


    checkStatus = (user) => {
       
        if (!this.props.reduxStore.invitees.find(invitee=> invitee.username === user.username)){
          return   <button onClick={(event) => this.inviteGuest(user)}>Invite</button>
        } else {
    
       return  <button onClick={(event) => this.uninviteGuest(user)}>Uninvite</button>
    }
}
    // send = () => {
    //     console.log(`You're invitation has been sent`);
    //     this.props.dispatch({ type: 'PREP_INVITEES', payload: this.state.invitees });
    //     // clear out state for next round
    //     this.setState({
    //         invitees: []
    //     });
    //     console.log('remember to clear state')
    // }




    render() {
        return (
            <div>

                <h1>Add Guests</h1>
                
           <ul>

                {this.props.reduxStore.guests.map((item, i) =>
                <li key={i}>{item.username}{this.checkStatus(item)}</li>
                )}
         </ul>
                
            {/* <button onClick={this.send}>Send</button> */}
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