import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Doughnut } from 'react-chartjs-2';



class ChartPoll extends Component {
    //dispatch vote info to db
    vote = (voteNumber) => {
        console.log(voteNumber)
        if (voteNumber === 1){
            this.setState({one: ++this.state.count.one})
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
        one: 0,
        two: 0,
        three: 0,
        four: 0,
    }

}
  
    render() {
        const data = {
            //labels get data from state
            labels: this.state.labels,
            datasets: [{
                data: [this.state.count.one, this.state.count.two, this.state.count.three, this.state.count.four],
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
                        <p key={i}>{i + 1}.  {item.option}{this.state.labels.push(item.option)}   <Button variant="contained" color="primary" onClick={() => this.vote(i+1)}>Vote</Button> </p>
                        
                    </>
                )}

                        
            </div>
            <div>
                        {JSON.stringify(this.props.reduxStore.options)}
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
