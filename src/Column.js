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
            output.push(0)

        }

        this.setState({
            cells:[...output]
        })

    }

    render() {
       
        return (
            <div className = "column"> 
                     {this.state.cells.map(column => (
                    <Column/>
                ))}       
            </div>
        )
    }

}

export default Column