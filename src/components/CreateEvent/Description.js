import React, { Component } from 'react';
import { connect } from 'react-redux';



class Description extends Component {
    

    state = {
        newItem: {
            eventName:'',
            description: '',
            userId: this.props.reduxStore.user.id 
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
        this.props.history.push('/poll');
    }

    handleBack = () => {

        // Then programmatically  nav back to home
        this.props.history.push('/home');
    }



    render() {
       
      
        return (
            <div>
{JSON.stringify(this.props.reduxStore)}
                <h1>Description</h1>
                <h4>Tell your guests about the event to which they're being invited!</h4>

                <section onSubmit={(event) => this.handleSubmit(event, this.state.newItem)} >

                    <label><span className="required">Name of event:</span></label>
                    <input type="text" value={this.state.newItem.eventName}
                        onChange={(event) => this.handleChangeFor(event, 'eventName')} />
                </section>

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