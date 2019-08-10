import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextFields from '@material-ui/core/TextField';
//import PollItem from './pollItem/PollItem';



class Poll extends Component {

    state = {
        newItem: {
            question: '',
            options: [],
            // eventId: this.props.reduxStore.event
        
        },
        optionInput: ''
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
        this.state.newItem.options.push(this.state.optionInput);
        this.setState({
            optionInput: ''
        })
    }


    handleClick = () => {
        // this.props.dispatch({ type: 'PREP_POLL', payload: this.state.newItem })
        this.props.history.push(`/addGuest/${this.props.reduxStore.event}`);
    }

    handleBack = () => {
      
        this.props.history.push('/description');
    }

    //sends over polling info to db
    handleSubmit = (eventId) => {
        console.log('youve clicked submit form');
      this.props.dispatch({ type: 'PREP_POLL', payload: { question: this.state.newItem.question, options: this.state.newItem.options, eventId: eventId }});
      // clear out state for more polls
        this.setState({
            newItem:{
            question: '',
            options: [],
           
            },
            optionInput: ''
        });

    }

    

    render() {
        
        return (

            <>
                <h2>Create a Poll Quest for your Guests</h2>
                <h5>Create options for them to vote on too!</h5>
                <section>
{JSON.stringify(this.props.reduxStore.event)}
                    <label><span className="required">Question:</span></label>
                    <TextFields type="text" value={this.state.newItem.question}
                        onChange={(event) => this.handleChangeFor(event, 'question')} />

                            <h3>{this.state.newItem.question}</h3>
                       <br />
                        <label><span className="required">Options:</span></label>
                    <TextFields type="text" value={this.state.optionInput}
                        onChange={(event) => this.handleChangeForOptions(event, 'optionInput')} />
                        &nbsp;
                    <Button variant="contained" color="primary" onClick={this.addOption}>Add Option</Button>
                            <h2>{this.state.newItem.options.map( (item, i)  => 
                                    <p key={i}>{item}</p>
                                )}</h2>


                        <br />
                    <Button variant="contained" color="primary" type="submit" value="submit" onClick={()=> this.handleSubmit(this.props.reduxStore.event)}>Create Poll</Button>
                </section>
                        <br />
                        {/* {JSON.stringify(this.props.reduxStore.poll.question)}
                {JSON.stringify(this.props.reduxStore.poll.options)} */}
                {JSON.stringify(this.props.reduxStore.poll)}
                        <section>
                    {/* {this.props.reduxStore.poll.map((item, i) =>
                        <>
                            <p key={i}><b>Question {i + 1}: {item.question}</b></p>
                        <PollItem options={item.options}/>
                        </>
                    )} */}
                        </section>
                <br />
                <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
                &nbsp;
            <Button variant="contained" color="primary" onClick={this.handleClick}>Next</Button>

                        
                

            </>

        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Poll);