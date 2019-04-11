import React, { Component } from "react"

class Cell extends Component {
    constructor (props){
        super(props)
        this.state = { 
            character : "0"
        }
    }

    
    theme = {
        width: '32px',
        height: '32px'
    }

    changeChar = () => {
        const char = String.fromCharCode(Math.floor(Math.random() * 25) + 97)
        this.setState({
            character: char
        })
    }

    render() {
       if (this.props.active) this.changeChar()
        return (
            <div style={this.theme}> 
                {this.state.character}     
            </div>
        )
    }

}

export default Cell