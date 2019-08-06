import React, { Component } from 'react';
import axios from "axios";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Courses from "./AddScoreCoursesComponent"
import "../../AddForm.css"

export default class AddScoreForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            course: "",
            totalScore: 0,
            totalPutts: 0,
            scoreToPar: 0,
            holeInOnes: 0,
            eagles: 0,
            birdies: 0,
            pars: 0,
            bogeys: 0,
            doubleBogeys: 0,
            tripleBogeys: 0,
            courses:[]
        }

        this.onChangeCourse = this.onChangeCourse.bind(this);
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
    }

    componentDidMount(){
        axios.get('http://localhost:5001/courses')
            .then(res => {
                this.setState({
                    courses: res.data
                });
            })
            .catch(function(error){
                console.log(error)
            })
    }    


//---------METHODS TO UPDATE THE STATE ------------------  
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


    //CREATES NEW SCORE WHEN SUBMITTED
    onSubmit(e){
        //prevents default action
        e.preventDefault();

        const date = new Date();
        let dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        let today = mm+"/"+dd+"/"+yyyy
        //create a new score with the data in the state
        const newScore = {
            date: today,
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

    //send and save the new score to the database
        axios.post("http://localhost:5001/scores", newScore)
            .then(res=> console.log(res.data));
        
        //resets the form back to the original state
        this.setState = ({
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
        })
    }

    render() {
        let {courses} = this.state;
        return (
            <div className="addScoreForm bg-secondary">
                <h1 align="center">Add Score</h1>
                <Form className="addScoreForm" onSubmit={this.onSubmit}>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label>Course</Form.Label>
                            <Form.Control 
                                as="select"
                                onChange={this.onChangeCourse}>
                                <option defaultValue>Pick a Course</option>
                                <Courses courses={courses} />
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label>Total Score</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.totalScore}
                                onChange={this.onChangeTotalScore}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Total Putts</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.totalPutts}
                                onChange={this.onChangeTotalPutts}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Score To Par</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.scoreToPar}
                                onChange={this.onChangeScoreToPar}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Eagles</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.eagles}
                                onChange={this.onChangeEagles}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Birdies</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.birdies}
                                onChange={this.onChangeBirdies}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Pars</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.pars}
                                onChange={this.onChangePars}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Bogeys</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.bogeys}
                                onChange={this.onChangeBogeys}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Double Bogeys</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.doubleBogeys}
                                onChange={this.onChangeDoubleBogeys}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Triple Bogeys</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.tripleBogeys}
                                onChange={this.onChangeTripleBogeys}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" size="lg" block type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }

}

/*


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
*/