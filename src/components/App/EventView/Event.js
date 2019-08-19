import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
import ChatBar from'../ChatBar/ChatBar';
import ChartPoll from '../ChartPoll/ChartPoll';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '300px',
        height: '150px',
        marginLeft: '5px',
        marginBottom: '10px',
        marginTop: '20px',
        overflow: 'auto',


    },
    guest:{
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '300px',
        height: '100px',
        marginLeft: '45px',
        marginBottom: 'px',
        marginTop: '17px',
        overflow: 'auto',
    },
    poll: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 5,
        width: '300px',
        height: '50px',
        marginLeft: '230px',
        marginBottom: '10px',
        marginTop: '20px',
        overflow: 'auto',


    }
});


class Event extends Component {

    state = {
        isEdit: false,
        description:{
            description:'',

        }
    }

    componentDidMount() {
        console.log('user id', this.props.reduxStore.user.id)
        this.props.dispatch({ type: 'GET_DESCRIPTION', payload: this.props.match.params.id });
        // this.props.dispatch({ type: 'GET_EVENT_USER_ID', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_INVITEES', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_POLL', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_OPTIONS', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_MSG', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_VOTE', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'GET_ONE', payload: this.props.event_id });
        this.props.dispatch({ type: 'GET_TWO', payload: this.props.event_id });
        this.props.dispatch({ type: 'GET_THREE', payload: this.props.event_id });
        this.props.dispatch({ type: 'GET_FOUR', payload: this.props.event_id });

    }

    handleClick = () => {
        this.props.history.push(`/event/${this.props.reduxStore.event}`);
    }

    handleBack = () => {
        this.props.history.push('/event');
    }

    editMode = () => {
        this.setState({
            isEdit: true
        })
    }

    save = () => {
        this.setState({
            isEdit: false
        });
        this.props.dispatch({ type: 'SET_EDIT_DESCRIPTION', payload: { description: this.state.description.description, event_id: this.props.match.params.id} });
    }

    handleChangeFor = (event, property) => {
        this.setState({
            description: {
                ...this.state.description,
                [property]: event.target.value,
            }
        })
    }

    checkUser = () => {
        if (this.props.reduxStore.user.id === this.props.reduxStore.description.user_id) {
        return  <Button variant = "contained" color = "secondary" onClick = { this.editMode } > Edit</Button>
 
    } else {

        return <></>
    }
    };


    render() {
        const { classes } = this.props;

        if (this.state.isEdit){
            return (
            <>
            
           <center><Paper className={classes.root}>
                        <h1><PeopleIcon></PeopleIcon> {this.props.reduxStore.description.event_name} <PeopleIcon></PeopleIcon></h1>
                <h4>Description:</h4>
                        <TextField type="text" value={this.state.description.description}
                            onChange={(event) => this.handleChangeFor(event, 'description')} /> </Paper></center> 
            <Grid container >
                

                {/* <pre>{JSON.stringify(this.props.reduxStore, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

                    <Grid item xs={6}>
                        <Paper className={classes.poll}>
                                <TextField type="text" 
                                     />
                            {/* <h4>Poll Question:</h4>
                            {this.props.reduxStore.poll.map((item, i) =>
                                <>
                                    <p key={i}>{item.question}</p>
                                </>
                            )} */}
                        </Paper>
                    </Grid>
              
                <Grid item xs={6}>
                <Paper className={classes.guest}>
                  <h4>Guest List:</h4>
                                <TextField type="text"
                                />
                    {/* {this.props.reduxStore.invitees.map((item, i) =>
                        <li key={i}>{item.username}</li>
                    )} */}
                    </Paper>
                    </Grid>
                

               <Grid item xs={6}>
                <ChartPoll event_id={this.props.match.params.id} voteOne={this.props.reduxStore.votes} voteTwo={this.props.reduxStore.votesTwo} voteThree={this.props.reduxStore.votesThree} voteFour={this.props.reduxStore.votesFour}/>
                </Grid>
                &nbsp;
                
                <Grid item>
                <ChatBar username={this.props.reduxStore.user.username} event_id={this.props.match.params.id} user_id={this.props.reduxStore.user.id} />
                </Grid>

                

            </Grid>
                <footer>
                    <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
                    &nbsp;
                <Button variant="contained" color="secondary" onClick={this.save}>Save</Button>

                </footer>
            </>
        )
        } else {
        return (
            <>
                <center><Paper className={classes.root}>
                <h1><PeopleIcon></PeopleIcon>{this.props.reduxStore.description.event_name}<PeopleIcon></PeopleIcon></h1>

                    <h4>Description:</h4>
                    <p>{this.props.reduxStore.description.description}</p>

                </Paper >
</center>
                
            <Grid container >
                    <Grid item xs={6}>
                        <Paper className={classes.poll}>
                            <h4>Poll Question:</h4>
                            {this.props.reduxStore.poll.map((item, i) =>
                                <>
                                    <p key={i}>{item.question}</p>
                                </>
                            )}
                        </Paper>
                    </Grid>
              
                <Grid item xs={6}>
                <Paper className={classes.guest}>
                  <h4>Guest List:</h4>
                    {this.props.reduxStore.invitees.map((item, i) =>
                        <li key={i}>{item.username}</li>
                    )}
                    </Paper>
                    </Grid>
                

               <Grid item xs={6}>
                <ChartPoll event_id={this.props.match.params.id} voteOne={this.props.reduxStore.votes} voteTwo={this.props.reduxStore.votesTwo} voteThree={this.props.reduxStore.votesThree} voteFour={this.props.reduxStore.votesFour}/>
                </Grid>
                &nbsp;
                
                <Grid item>
                <ChatBar username={this.props.reduxStore.user.username} event_id={this.props.match.params.id} user_id={this.props.reduxStore.user.id} />
                </Grid>

                

            </Grid>
                <footer>
                    <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
                    &nbsp;
                    {this.checkUser()}

                </footer>
            </>
        )
    }
}
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default withStyles(styles)(connect(putReduxStoreOnProps)(Event));