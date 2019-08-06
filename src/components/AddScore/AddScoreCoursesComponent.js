import React from "react";

const Courses = (props) => {
    const courses = props.courses;
    let coursesArray = courses.map((course,index) => {
        return course.name
    })
    let sortedArray = coursesArray.sort();
        return (
            sortedArray.map((course,index) => {
                return (
                    <option key={index} value={course}>{course}</option>
                )
            })
    )
}

export default Courses