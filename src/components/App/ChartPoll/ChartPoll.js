import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Doughnut } from 'react-chartjs-2';



class ChartPoll extends Component {
componentDidMount(){
    this.props.dispatch({ type: 'GET_ONE', payload: this.props.event_id })

}

    //dispatch vote info to db
    vote = (voteNumber) => {
        console.log(voteNumber)
        if (voteNumber === 1){
            this.props.dispatch({ type: 'ADD_ONE', payload: { vote_id: 1, event_id: this.props.event_id }})
            this.props.dispatch({ type: 'GET_ONE', payload: this.props.event_id  })
        } else if (voteNumber === 2){
            this.setState({ two: ++this.state.count.two })
        } else if (voteNumber === 3) {
            this.setState({ three: ++this.state.count.three })
        } else if (voteNumber === 4) {
            this.setState({ four: ++this.state.count.four })
        }
        
    }


state = {
    labels: [],
    count: {
        one: Number(this.props.voteOne),
        two: 1,
        three: 0,
        four: 0,
    }

}



  
    render() {

        const labels = []; 

        const data = {
            //labels get data from state
            labels: labels,
            datasets: [{
                data: [Number(this.props.voteOne), this.state.count.two, this.state.count.three, this.state.count.four],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'green'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        }
    
        

        return (
           
            <>
            <div>
                <h2>Doughnut Example</h2>
                displayName: 'DoughnutExample';
                <Doughnut data={data} />
            </div>
            <section className="chart">
            <div className="options">
                <h6>Poll Options:</h6>
                {this.props.reduxStore.options.map((item, i) =>
                    <>
                        <p key={i}>{i + 1}.  {item.option}{labels.push(item.option)}   <Button variant="contained" color="primary" onClick={() => this.vote(i+1)}>Vote</Button> </p>
                        
                    </>
                )}

                        
            </div>
            <div>
                {(JSON.stringify(Number(this.props.voteOne)))}
            </div>
            
            </section>
            </>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(ChartPoll);
