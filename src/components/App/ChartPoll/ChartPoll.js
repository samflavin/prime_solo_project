import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Doughnut } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '300px',
        height: '500px',
        marginLeft: '45px',
        // marginBottom: '50px',
        marginTop: '20px'

    },
});


class ChartPoll extends Component {
componentDidMount(){
    this.props.dispatch({ type: 'GET_ONE', payload: this.props.event_id });
    this.props.dispatch({ type: 'GET_TWO', payload: this.props.event_id });
    this.props.dispatch({ type: 'GET_THREE', payload: this.props.event_id });
    this.props.dispatch({ type: 'GET_FOUR', payload: this.props.event_id });
}

    //dispatch vote info to db
    vote = (voteNumber) => {
        console.log(voteNumber)
        if (voteNumber === 1){

            this.props.dispatch({ type: 'ADD_ONE', payload: { vote_id: 1, event_id: this.props.event_id }})
            this.props.dispatch({ type: 'GET_ONE', payload: this.props.event_id  })

        } else if (voteNumber === 2){

            this.props.dispatch({ type: 'ADD_TWO', payload: { vote_id: 2, event_id: this.props.event_id } })
            this.props.dispatch({ type: 'GET_TWO', payload: this.props.event_id })

        } else if (voteNumber === 3) {

            this.props.dispatch({ type: 'ADD_THREE', payload: { vote_id: 3, event_id: this.props.event_id } })
            this.props.dispatch({ type: 'GET_THREE', payload: this.props.event_id })
           
        } else if (voteNumber === 4) {
            
            this.props.dispatch({ type: 'ADD_FOUR', payload: { vote_id: 4, event_id: this.props.event_id } })
            this.props.dispatch({ type: 'GET_FOUR', payload: this.props.event_id })
        }
        
    }


state = {
    labels: [],
   
}

    render() {

        const labels = []; 

        const data = {
            //labels get data from state
            labels: labels,
            datasets: [{
                data: [Number(this.props.voteOne), Number(this.props.voteTwo), Number(this.props.voteThree), Number(this.props.voteFour)],
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
    
        const { classes } = this.props;


        return (
            
           
            <>
            <Paper className={classes.root}>
            <div>
                    Options
                <Doughnut data={data} />
                
            </div>
            <div className="options">
                <h6>Poll Options:</h6>
                {this.props.reduxStore.options.map((item, i) => {
                    console.log(item.option)
                    return(
                        <>
                            <p key={i}>{i + 1}.  {item.option}   <Button variant="contained" color="primary" onClick={() => this.vote(i + 1)}>Vote</Button> </p>
                        </>
                    )
                }

                )}       
            </div>
          </Paper>  
            </>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default withStyles(styles)(connect(putReduxStoreOnProps)(ChartPoll));

// { labels.push(item.option) }  put next to item.option
