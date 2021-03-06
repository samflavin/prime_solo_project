import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import PollItem from './pollItem/PollItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '380px',
        height: '500px',
        marginLeft: '5px',
        marginBottom: '50px',
        marginTop: '20px',
        overflow: 'auto',

    },
    header: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '350px',
        height: '80px',
        marginLeft: '1px',
        marginRight: '1px',
        marginBottom: '20px',
        marginTop: '20px',
        overflow: 'auto',
    },

});

class Poll extends Component {

    state = {
        newItem: {
            question: '',
            options: [],
            // eventId: this.props.reduxStore.event
        
        },
        optionInput1: '',
        optionInput2: '',
        optionInput3: '',
        optionInput4: ''
    }

    handleChangeFor = (event, property) => {

        this.setState({
            newItem: {
                ...this.state.newItem,
                [property]: event.target.value,
            }
        })
    }

    handleChangeForOptions = (event, property) => {
        this.setState({
            [property]: event.target.value
        })

    }

    addOption = () => {
        this.state.newItem.options.push(this.state.optionInput1);
        this.setState({
            optionInput1: ''
        });
        this.state.newItem.options.push(this.state.optionInput2);
        this.setState({
            optionInput2: ''
        });
        this.state.newItem.options.push(this.state.optionInput3);
        this.setState({
            optionInput3: ''
        });
        this.state.newItem.options.push(this.state.optionInput4);
        this.setState({
            optionInput4: ''
        });
    }

    handleBack = () => {
      
        this.props.history.push('/description');
    }

    //sends over polling info to db
    handleSubmit = (eventId) => {
      this.props.dispatch({ type: 'PREP_POLL', payload: { question: this.state.newItem.question, options: this.state.newItem.options, eventId: eventId }});
      // clear out state for more polls
        this.setState({
            newItem:{
            question: '',
            options: [],
           
            },
            optionInput1: '',
            optionInput2: '',
            optionInput3: '',
            optionInput4: ''
        });
        //Nav to next
        this.props.history.push(`/addGuest/${this.props.reduxStore.event}`);
    }



    render() {

        const { classes } = this.props;

        return (

            <>
               <center><Paper className={classes.header}>
                <h2>Create a Poll Question for your Guests</h2>
                </Paper></center >

                <center><Paper className={classes.root}>
                <section>
                    <label><span className="required">Question:  </span></label>
                    <TextField type="text" value={this.state.newItem.question}
                        onChange={(event) => this.handleChangeFor(event, 'question')} />
                    <h5>Create options for them to vote on too!</h5>

                            <h3>{this.state.newItem.question}</h3>
                       <br />

                    <label>1.  </label>
                    <TextField type="text" value={this.state.optionInput1}
                        onChange={(event) => this.handleChangeForOptions(event, 'optionInput1')} />
                        &nbsp;

                        <label>2.  </label>
                          <TextField type="text" value={this.state.optionInput2}
                        onChange={(event) => this.handleChangeForOptions(event, 'optionInput2')} />
                        &nbsp;

                         <label>3.  </label>
                          <TextField type="text" value={this.state.optionInput3}
                        onChange={(event) => this.handleChangeForOptions(event, 'optionInput3')} />
                        &nbsp;

                        <label>4. </label>
                          <TextField type="text" value={this.state.optionInput4}
                        onChange={(event) => this.handleChangeForOptions(event, 'optionInput4')} />
                        
                        <p></p>
                    <Button variant="contained" color="primary" onClick={this.addOption}>Add Options</Button>
                            <h2>{this.state.newItem.options.map( (item, i)  => 
                                    <p key={i}>{item}</p>
                                )}</h2>
                        <br />
                    <Button variant="contained" color="primary" type="submit" value="submit" onClick={()=> this.handleSubmit(this.props.reduxStore.event)}>Create Poll</Button>
                     </section>
                        <br />
                </Paper></center>
                <br />
                <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
                &nbsp;
            </>

        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default withStyles(styles)(connect(putReduxStoreOnProps)(Poll));