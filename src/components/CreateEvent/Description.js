import React, { Component } from 'react';
import { connect } from 'react-redux';



class Description extends Component {
    
    state = {
        newItem: {
            description: '' 
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
        //dispatch to saga to put description in redux
        this.props.dispatch({ type: 'PREP_DESCRIPTION', payload: this.state.newItem  })


        // Then programmatically  nav back to home
        this.props.history.push('/poll');
    }

    handleBack = () => {
        // Do javascript fun stuff?
        alert('Going back');

        // Then programmatically  nav back to home
        this.props.history.push('/home');
    }



    render() {
        return (
            <div>

                <h1>Description</h1>
                <h4>Tell your guests about the event to which they're being invited!</h4>

                <section onSubmit={(event) => this.handleSubmit(event, this.state.newItem)} >

                    <label><span className="required"></span></label>
                    <textarea type="text" value={this.state.newItem.description}
                        onChange={(event) => this.handleChangeFor(event, 'description')} />
                </section>


                &nbsp;
            <button onClick={this.handleBack}>Back</button>
              &nbsp;
            <button onClick={(event) => this.handleClick(event, this.state.newItem)}>Next</button>
            

            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Description);