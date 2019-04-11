import React, { Component } from "react"

class Cell extends Component {
    constructor (props){
        super(props)
        this.state = {
        }
    }

    
    theme = {
        width: '32px',
        height: '32px'
    }

    render() {
       
        return (
            <div className = "cell" style={this.theme}> 
                {this.props.value}     
            </div>
        )
    }

}

export default Cell