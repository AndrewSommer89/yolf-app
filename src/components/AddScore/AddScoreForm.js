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
        //set the state to nothing
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

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    //get the information from "/courses" to pass it down to courses component for course selector
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


//---------METHOD TO UPDATE THE STATE ------------------  
    handleChange(e){
        //get the target "name" and set the state of the name to the value in the input box
        this.setState({[e.target.name]: e.target.value})
    }


    //CREATES NEW SCORE WHEN SUBMITTED
    onSubmit(e){
        //prevents default action
        e.preventDefault();

        //add current date to score
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
        this.props.history.push("/scores");
    }

    render() {
        let {courses} = this.state;
        return (
            <div className="addScoreForm bg-secondary">
                <h1 align="center">Add Score</h1>
                <Form className="addScoreForm" onSubmit={this.onSubmit} onChange={this.handleChange}>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label>Course</Form.Label>
                            <Form.Control
                                name="course"
                                as="select"
                            >
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
                                name="totalScore"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Total Putts</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.totalPutts}
                                name="totalPutts"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Score To Par</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.scoreToPar}
                                name="scoreToPar"
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
                                name="eagles"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Birdies</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.birdies}
                                name="birdies"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Pars</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.pars}
                                name="pars"
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
                                name="bogeys"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Double Bogeys</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.doubleBogeys}
                                name="doubleBogeys"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Triple Bogeys</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.tripleBogeys}
                                name="tripleBogeys"
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