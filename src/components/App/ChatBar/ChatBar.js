import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class ChatBar extends Component {

    state = {
        newItem: {
            msg: '',
            user_id: this.props.user_id,
            event_id: this.props.event_id,
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

    send = () => {
        this.props.dispatch({ type: 'PREP_MSG', payload: this.state.newItem })
       
    }

    render() {
        console.log(this.state)

        return (
            <div className="chatBar">
             <h4>Sup Chatbar</h4>
                <section>
                        <div className="messages">
                        <h4>Chat:</h4>
                        {this.props.reduxStore.messages.map((item, i) =>
                            <>
                            <p key={i}>{item.username}: {item.messages}</p>
                            </>
                        )}
                    </div>
                </section>
                <section>
                    <TextFields placeholder="Type something..." type="text" value={this.state.newItem.msg}
                    onChange={(event) => this.handleChangeFor(event, 'msg')} /> <p></p>
                    <Button variant="contained" color="primary" onClick={() => this.send(this.state.newItem)}>Send</Button>
                </section>
            </div>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(ChatBar);
