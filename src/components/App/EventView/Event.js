import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';




class Event extends Component {


    componentDidMount() {
        console.log('user id', this.props.reduxStore.user.id)
        this.props.dispatch({ type: 'FETCH_EVENTLIST', payload: this.props.reduxStore.user.id });

    }

    handleClick = () => {
        this.props.history.push(`/event/${this.props.reduxStore.event}`);
    }

    handleBack = () => {

        // Then programmatically  nav back to poll
        this.props.history.push('/event');
    }

    //sets state of invited guests
    inviteGuest = (item) => {
        console.log(`You're invitation has been sent`, item);
        console.log(this.props.reduxStore.poll)
        this.props.dispatch({ type: 'PREP_INVITEES', payload: { eventId: this.props.reduxStore.poll[0].event_id, userId: item.id } });
    }
    // item.id 
    uninviteGuest = (item) => {
        console.log(`You're invitation has been revoked`);
        this.props.dispatch({ type: 'ALTER_INVITEES', payload: { eventId: this.props.reduxStore.event, userId: item.id } });
    }

    view = (event) => {
        console.log('youve clicked this event', event)
        this.props.history.push(`/event/${event.id}`);
    }





    // checkStatus = (user) => {

    //     if (!this.props.reduxStore.invitees.find(invitee => invitee.username === user.username)) {
    //         return <button onClick={(event) => this.inviteGuest(user)}>Invite</button>
    //     } else {

    //         return <button onClick={(event) => this.uninviteGuest(user)}>Uninvite</button>
    //     }
    // }




    render() {

        return (
            <div>
                <h1><PeopleIcon></PeopleIcon>  Events Page  <PeopleIcon></PeopleIcon></h1>
                {JSON.stringify(this.props.reduxStore.currentEvent)}
                <h2>Specific Event:</h2>
            

                <hr />
                &nbsp;
            <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
                &nbsp;

            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Event);