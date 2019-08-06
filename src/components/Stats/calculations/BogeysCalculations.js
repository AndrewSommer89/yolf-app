import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"

const Bogeys = (props) => {
    let scores = props.scores

    const bogeys = scores.map((score,index)=>{
        return score.bogeys
    })
    
    function getBogeyTotal(){
        let bogeyTotal = 0;
        for(let i = 0; i < bogeys.length; i++){
            let bogey = Number(bogeys[i])
            bogeyTotal = bogeyTotal + bogey
        }
        return bogeyTotal
    }

    function getBogeysPerRound(){
        let bogeyTotal = getBogeyTotal();
        const totalRounds = props.scores.length;
        const bogeysPerRound = (bogeyTotal/totalRounds).toPrecision(3)
        return bogeysPerRound
    }

    function getBogeyLikelihood(){
        const bogeysPerHole = (getBogeysPerRound()/18).toPrecision(2); 
        const bogeyPercentage = Math.round(bogeysPerHole*100)+'%'
        return bogeyPercentage
    }
    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="dark">Total Bogeys: {getBogeyTotal()}</ListGroup.Item>
            <ListGroup.Item variant="dark">Bogeys Per Round: {getBogeysPerRound()}</ListGroup.Item>
            <ListGroup.Item variant="dark">Bogeys Likelihood {getBogeyLikelihood()}</ListGroup.Item>
        </ListGroup>
    )
}

export default Bogeys;