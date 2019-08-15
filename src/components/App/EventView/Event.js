import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
import ChatBar from'../ChatBar/ChatBar';
import ChartPoll from '../ChartPoll/ChartPoll';





class Event extends Component {


    componentDidMount() {
        console.log('user id', this.props.reduxStore.user.id)
        this.props.dispatch({ type: 'GET_DESCRIPTION', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_INVITEES', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_POLL', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_OPTIONS', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_MSG', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_VOTE', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_ONE', payload: this.props.event_id });
        this.props.dispatch({ type: 'GET_TWO', payload: this.props.event_id });
        this.props.dispatch({ type: 'GET_THREE', payload: this.props.event_id })
        this.props.dispatch({ type: 'GET_FOUR', payload: this.props.event_id })





    }

    handleClick = () => {
        this.props.history.push(`/event/${this.props.reduxStore.event}`);
    }

    handleBack = () => {
        this.props.history.push('/event');
    }


    render() {

        return (
            <div>
                <h1><PeopleIcon></PeopleIcon>{this.props.reduxStore.description.event_name}<PeopleIcon></PeopleIcon></h1>
                {JSON.stringify(this.props.reduxStore)}
              <div className="description">
                  <h4>Description:</h4>
                  <p>{this.props.reduxStore.description.description}</p>
                </div>
                <div className="guestList">
                  <h4>Guest List:</h4>
                    {this.props.reduxStore.invitees.map((item, i) =>
                        <li key={i}>{item.username}</li>
                    )}
                     </div>
                <div className="poll">
                    <h4>Poll Question:</h4>
                    {this.props.reduxStore.poll.map((item, i) =>
                        <>
                            <p key={i}>{item.question}</p>
                        </>
                    )}
                </div>
                <ChartPoll event_id={this.props.match.params.id} voteOne={this.props.reduxStore.votes} voteTwo={this.props.reduxStore.votesTwo} voteThree={this.props.reduxStore.votesThree} voteFour={this.props.reduxStore.votesFour}/>
                 
                &nbsp;
                <div>
                <ChatBar username={this.props.reduxStore.user.username} event_id={this.props.match.params.id} user_id={this.props.reduxStore.user.id} />
                </div>

            


            <footer>
            <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
            </footer>
                &nbsp;

            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Event);