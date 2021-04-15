// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
    
    state = {
        secondsLeft: this.props.initialCount,
    }
    
    bombTimer = () =>{
        if(this.props.initialCount === 0){
            return 'Boom!'
        }else{
            return `${this.props.initialCount} seconds left before I go boom!`
        }
    }

    render() {
        return (
            <div>
                {this.bombTimer()}
            </div>
        )
    }
}

export default Bomb