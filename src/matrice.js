import React, { Component } from "react"
import Column from "./Column"

class Matrice extends Component {
    constructor (props){
        super(props)
        this.state = {
            colums : []
        }
    }

    componentDidMount(){
        this.createCol()
    }

    createCol = () => {
        const output = [];
        for (let i = 0; i<Math.floor(window.innerWidth / 32); i++){
            output.push(i)

        }

        this.setState({
            colums:[...output]
        })
        window.tab = output // debug
    }

    theme = {
        color: 'white',
        fontFamily: 'consolas'
    }
    render() {
        
        return (
            <div className = "matriceContainer" style={this.theme}> 
            
                {this.state.colums.map(column => (
                    <Column key={column}/>
                ))}
                            
            </div>
        )
    }

}

export default Matrice