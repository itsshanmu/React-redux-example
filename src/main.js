
import React, {Component} from 'react'
import { connect } from 'react-redux'

class Main extends Component{
    constructor(props){
        super() 
       
    }

   
    render(){       
        return(
        <div align="center">
            <h1>React redux example</h1>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
          </div>
        )
    }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
      }
    
      decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
      }

      reset = () => {
        this.props.dispatch({ type: 'RESET'});
      }

}

const mapStateToProps = state =>{ return {count: state.count}}


export default connect(mapStateToProps,)(Main);