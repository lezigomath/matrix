import React, { Component } from "react"

class Cell extends Component {
    constructor (props){
        super(props)
        this.property = { 
            character : '',
            opacity: 1,
            mounted: false
        }
    }

    render() {
        this.property.opacity -= 0.05 
        if (this.props.active){
            this.property.wasActive = 20
            this.property.opacity = 1
        }
        this.property.wasActive -=1
        if (this.props.character) this.property.character = this.props.character
        if (this.property.wasActive < 0) this.property.character = ''

       
        return (
            <div style={{width: '32px', height: '32px', opacity: this.property.opacity.toFixed(2)}} className={`cell cell-${this.props.index} ${this.props.active ? "active" : ""}`} > 
                {this.props.character || this.property.character}     
            </div>
        )
    }

}

export default Cell