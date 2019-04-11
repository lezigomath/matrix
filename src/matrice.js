import React, { Component } from "react"
import Column from "./Column"

class Matrice extends Component {
    constructor (props){
        super(props)
        this.state = {
            colums : [],
            frame: 0,
            running: false
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

    run = () => {
        if (!this.state.running) {
            this.setState({
                running : setInterval(() => {
                    this.setState({
                        frame : this.state.frame + 1
                    })
                })
            })
        }
    }

    theme = {
        color: 'white',
        fontFamily: 'consolas'
    }
    render() {
        
        return (
            <div className = "matriceContainer" style={this.theme}> 
            
                {this.state.colums.map((column, index) => (
                    <Column key={column} className={`col col-${index}`}/>
                ))}
                            
            </div>
        )
    }

}

export default Matrice