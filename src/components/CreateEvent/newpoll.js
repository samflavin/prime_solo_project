import React, { Component } from 'react';
import { connect } from 'react-redux';



class Poll extends Component {

    state = {
        newItem: {
            question: '',
            options: ''
        }
    }

    handleChangeFor = (event, property) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [property]: event.target.value,
            }
        })
    }


    handleClick = () => {
        
        this.props.history.push('/addGuest');
    }

    handleBack = () => {
        // Then programmatically  nav back to home
        this.props.history.push('/description');
    }

    render() {
        console.log(this.state)

        return (

        <>
            <h1>Create a Poll Quest for your Guests</h1>
                <h4>Create options for them to vote on too!</h4>
                <section onSubmit={(event) => this.handleSubmit(event, this.state.newItem)} >

                    <label><span className="required">g</span></label>
                    <input type="text" value={this.state.newItem.description}
                        onChange={(event) => this.handleChangeFor(event, 'description')} />
                </section>

        </>
            
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Poll);