import React, { Component } from 'react';
import axios from "axios";

export default class Handicap extends Component {
    constructor(props){
        super(props)
        this.state = {scores: []}
    }

    componentDidMount(){
        axios.get('http://localhost:5001/scores/')
            .then(res => {
                this.setState({scores: Response.data});
            })
            .catch(function(error){
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                <h1>Handicap</h1>
            </div>
        )
    }
}