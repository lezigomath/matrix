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
            output.push(0)

        }

        this.setState({
            colums:[...output]
        })
        window.tab = output // debug
    }
    render() {
        
        return (
            <div className = "matriceContainer"> 
            
                {this.state.colums.map(column => (
                    <Column/>
                ))}
                            
            </div>
        )
    }

}

export default Matrice