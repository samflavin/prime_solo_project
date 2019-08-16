import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '380px',
        height: '200px',
        marginLeft: '5px',
        marginBottom: '50px',
        marginTop: '50px',
        overflow: 'auto',

    },
});


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
        console.log(this.props.reduxStore.poll)
        this.props.dispatch({ type: 'PREP_INVITEES', payload:{ eventId: this.props.reduxStore.poll[0].event_id, userId: item.id}});
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
        const { classes } = this.props;

        return (
            <div>
                {/* {JSON.stringify(this.props.reduxStore.poll)} */}
                <h1><PeopleIcon></PeopleIcon> Add Guests  <PeopleIcon></PeopleIcon></h1>
                <center><Paper className={classes.root} > 
                 <hr />

           <ul>

                {this.props.reduxStore.guests.map((item, i) =>
                <li key={i}>{item.username}{this.checkStatus(item)}</li>
                )}
         </ul>
                
            {/* <button onClick={this.send}>Send</button> */}
                <hr />
                &nbsp;
            </Paper>  </center>
            <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
                &nbsp;
            <Button variant="contained" color="primary" onClick={this.handleClick}>Next</Button>
                
            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default withStyles(styles)(connect(putReduxStoreOnProps)(AddGuests));