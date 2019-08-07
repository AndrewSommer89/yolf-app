import React, { Component } from 'react';
import axios from 'axios';

export default class EditScore extends Component {
    constructor(props){
        super(props);

        this.onChangeTotalScore = this.onChangeTotalScore.bind(this);
        this.onChangeTotalPutts = this.onChangeTotalPutts.bind(this);
        this.onChangeScoreToPar = this.onChangeScoreToPar.bind(this);
        this.onChangeHoleInOnes = this.onChangeHoleInOnes.bind(this);
        this.onChangeEagles = this.onChangeEagles.bind(this);
        this.onChangeBirdies = this.onChangeBirdies.bind(this);
        this.onChangePars = this.onChangePars.bind(this);
        this.onChangeBogeys = this.onChangeBogeys.bind(this);
        this.onChangeDoubleBogeys = this.onChangeDoubleBogeys.bind(this);
        this.onChangeTripleBogeys = this.onChangeTripleBogeys.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            totalScore: 0,
            totalPutts: 0,
            scoreToPar: 0,
            holeInOnes: 0,
            eagles: 0,
            birdies: 0,
            pars: 0,
            bogeys: 0,
            doubleBogeys: 0,
            tripleBogeys: 0
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5001/scores/"+this.props.match.params.id)
            .then(response => {
                this.setState({
                    date: response.data.date,
                    course: response.data.course,
                    totalScore: response.data.totalScore,
                    totalPutts: response.data.totalPutts,
                    scoreToPar: response.data.scoreToPar,
                    holeInOnes: response.data.holeInOnes,
                    eagles: response.data.eagles,
                    birdies: response.data.birdies,
                    pars: response.data.pars,
                    bogeys: response.data.bogeys,
                    doubleBogeys: response.data.doubleBogeys,
                    tripleBogeys: response.data.tripleBogeys
                })
            })
            .catch(function(error){
                console.log(error);
            })
    }

    onChangeDate(e){
        this.setState({
            date: e.target.value
        })
    }

    onChangeCourse(e){
        this.setState({
            course: e.target.value
        })
    }

    onChangeTotalScore(e){
        this.setState({
            totalScore: e.target.value
        })
    }

    onChangeTotalPutts(e){
        this.setState({
            totalPutts: e.target.value
        })
    }

    onChangeScoreToPar(e){
        this.setState({
            scoreToPar: e.target.value
        })
    }

    onChangeHoleInOnes(e){
        this.setState({
            holeInOnes: e.target.value
        })
    }

    onChangeEagles(e){
        this.setState({
            eagles: e.target.value
        })
    }

    onChangeBirdies(e){
        this.setState({
            birdies: e.target.value
        })
    }

    onChangePars(e){
        this.setState({
            pars: e.target.value
        })
    }

    onChangeBogeys(e){
        this.setState({
            bogeys: e.target.value
        })
    }

    onChangeDoubleBogeys(e){
        this.setState({
            doubleBogeys: e.target.value
        })
    }

    onChangeTripleBogeys(e){
        this.setState({
            tripleBogeys: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            date: this.state.date,
            course: this.state.course,
            totalScore: this.state.totalScore,
            totalPutts: this.state.totalPutts,
            scoreToPar: this.state.scoreToPar,
            holeInOnes: this.state.holeInOnes,
            eagles: this.state.eagles,
            birdies: this.state.birdies,
            pars: this.state.pars,
            bogeys: this.state.bogeys,
            doubleBogeys: this.state.doubleBogeys,
            tripleBogeys: this.state.tripleBogeys
        };
        axios.post("http://localhost:5001/scores/edit/"+this.props.match.params.id,obj)
            .then(res=> console.log(res.data));
        
        this.props.history.push("/scores");
    }

    render(){
        return(
            <div>
                <h3>Update Score</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Total Score: </label>
                        <input
                            type="number"
                            value={this.state.totalScore}
                            onChange={this.onChangeTotalScore}
                        />
                    </div>
                    <div>
                        <label>Total Putts:</label>
                        <input 
                            type="number"
                            value={this.state.totalPutts}
                            onChange={this.onChangeTotalPutts}
                        />
                    </div>
                    <div>
                        <label>Score to Par:</label>
                        <input
                            type="number"
                            value={this.state.scoreToPar}
                            onChange={this.onChangeScoreToPar}
                        />
                    </div>
                    <div>
                        <label>Hole in Ones:</label>
                        <input
                            type="number"
                            value={this.state.holeInOnes}
                            onChange={this.onChangeHoleInOnes}
                        />
                    </div>
                    <div>
                        <label>Eagles:</label>
                        <input
                            type="number"
                            value={this.state.eagles}
                            onChange={this.onChangeEagles}
                        />
                    </div>
                    <div>
                        <label>Birdies:</label>
                        <input
                            type="number"
                            value={this.state.birdies}
                            onChange={this.onChangeBirdies}
                        />
                    </div>
                    <div>
                        <label>Pars:</label>
                        <input
                            type="number"
                            value={this.state.pars}
                            onChange={this.onChangePars}
                        />
                    </div>
                    <div>
                        <label>Bogeys</label>
                        <input
                            type="number"
                            value={this.state.bogeys}
                            onChange={this.onChangeBogeys}
                        />
                    </div>
                    <div>
                        <label>Double Bogeys</label>
                        <input
                            type="number"
                            value={this.state.doubleBogeys}
                            onChange={this.onChangeDoubleBogeys}
                        />
                    </div>
                    <div>
                        <label>Triple Bogeys</label>
                        <input 
                            type="number"
                            value={this.state.tripleBogeys}
                            onChange={this.onChangeTripleBogeys}
                        />
                    </div>
                    <br />
                    <div>
                        <input type="submit" value="Submit Score" />
                    </div>
                </form>
            </div>
        )
    }
}