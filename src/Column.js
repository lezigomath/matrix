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
            cells:[...output],
            activeCell : -1
        })

    }

    theme = {
        width: '32px',
        margin: 0,
        float: 'left'
    }


    render() {
       
        return (
            <div style={this.theme}>
                     {this.state.cells.map((cell, index) => {
                        if ( (index === 0) || (index === this.state.activeCell+1) ){
                            if ( Math.floor(Math.random() * 3) === 2 ){
                                this.setState({
                                    activeCell: index
                                })
                            }
                        }
                        return <Cell 
                        key={cell} 
                        className={`cell cell-${index} ${this.state.activeCell === index ? "active" : ""}`} 
                        active={this.state.activeCell === index ? true : false}/>
                     }
                    
                )}       
            </div>
        )
    }

}

export default Column