import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollItem from './pollItem/PollItem';



class Poll extends Component {

    state = {
        newItem: {
            question: '',
            options: [],
            eventId: this.props.reduxStore.event
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
        console.log(this.state)
    }


    handleClick = () => {

        this.props.history.push('/addGuest');
    }

    handleBack = () => {
        // Then programmatically  nav back to home
        this.props.history.push('/description');
    }

    handleSubmit = () => {
        console.log('youve clicked submit form');
      this.props.dispatch({ type: 'PREP_POLL', payload: this.state.newItem });
      // clear out state for more polls
        this.setState({
            newItem:{
            question: '',
            options: [],
            eventId: ''
            },
            optionInput: ''
        });
        console.log(this.state)

    }

    

    render() {
        
        return (

            <>
                <h2>Create a Poll Quest for your Guests</h2>
                <h5>Create options for them to vote on too!</h5>
                <section>
{JSON.stringify(this.props.reduxStore.event)}
                    <label><span className="required">Question:</span></label>
                    <input type="text" value={this.state.newItem.question}
                        onChange={(event) => this.handleChangeFor(event, 'question')} />

                            <h3>{this.state.newItem.question}</h3>
                       <br />
                        <label><span className="required">Options:</span></label>
                    <input type="text" value={this.state.optionInput}
                        onChange={(event) => this.handleChangeForOptions(event, 'optionInput')} />
                        <button onClick={this.addOption}>Add Option</button>
                            <h2>{this.state.newItem.options.map( (item, i)  => 
                                    <p key={i}>{item}</p>
                                )}</h2>


                        <br />
                        <button type="submit" value="submit" onClick={this.handleSubmit}>Create Poll</button>
                </section>
                        <br />
                        {/* {JSON.stringify(this.props.reduxStore.poll)} */}
                        <section>
                    {this.props.reduxStore.poll.map((item, i) =>
                        <>
                            <p key={i}><b>Question {i + 1}: {item.question}</b></p>
                        <PollItem options={item.options}/>
                        </>
                    )}
                        </section>
                <br />
                <button onClick={this.handleBack}>Back</button>
                &nbsp;
            <button onClick={this.handleClick}>Next</button>

                        
                

            </>

        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Poll);