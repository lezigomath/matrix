import React, { Component } from "react"
import Cell from "./Cell"

class Column extends Component {
    constructor (props){
        super(props)
        this.state = {
            cells : []
        }
    }

    componentDidMount(){
        this.createCells()
    }

    createCells = () => {
        const output = [];
        for (let i = 0; i<Math.floor(window.innerHeight / 32); i++){
            output.push(i)
        }

        this.setState({
            cells:[...output]
        })

    }

    theme = {
        width: '32px',
        margin: 0,
        float: 'left'
    }


    render() {
       
        return (
            <div className = "column" style={this.theme}>
                     {this.state.cells.map(cell => (
                    <Cell key={cell} value={String.fromCharCode(Math.floor(Math.random() * 25) + 97)}/>
                ))}       
            </div>
        )
    }

}

export default Column