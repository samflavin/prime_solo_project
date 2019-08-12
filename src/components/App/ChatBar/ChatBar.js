import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatBar extends Component {




    render() {

        return (
            <div className="chatBar">
             Sup Chatbar
            </div>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(ChatBar);
