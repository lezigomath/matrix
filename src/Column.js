import React, { Component } from "react"
import Cell from "./Cell"

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cells: [],
            activeCell: -1
        }
    }

    componentDidMount() {
        this.createCells()
    }

    createCells = () => {
        const output = [];
        for (let i = 0; i < Math.floor(window.innerHeight / 32); i++) {
            output.push(i)
        }

        this.setState({
            cells: [...output],

        })

    }

    theme = {
        width: '32px',
        margin: 0,
        float: 'left'
    }


    render() {

        return (
            <div style={this.theme} className={`col col-${this.props.index}`}>
                {this.state.cells.map((cell, index) => {
                    if ((index === this.state.activeCell + 1)) {
                        if (Math.floor(Math.random() * 2) === 1) {
                            
                                this.setState({
                                    activeCell: index
                                })
                            

                        }
                    } else if (this.state.activeCell >= this.state.cells.length-1) {
                        this.setState({
                            activeCell: 0
                        })
                    }
                    return <Cell
                        key={cell}
                        index={index}
                        character={this.state.activeCell === index ? String.fromCharCode(Math.floor(Math.random() * 25) + 97) : false}
                        active={this.state.activeCell === index ? true : false} />
                }

                )}
            </div>
        )
    }

}

export default Column